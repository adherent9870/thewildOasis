import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not get loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}

export async function createEditCabin(newCabin, id) {
  console.log("New Cabin Data:", newCabin, "ID:", id);

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  console.log("Image Path:", imagePath);

  // 1. Create/edit a cabin
  let query = supabase.from("cabins");

  if (!id) {
    // A) Create a new cabin
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    // B) Edit an existing cabin
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().maybeSingle(); // Use maybeSingle() to handle no rows

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Cabin could not be created or updated");
  }

  if (!data) {
    throw new Error(
      "No cabin was created or updated. Please check your input."
    );
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error("Storage Error:", storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
