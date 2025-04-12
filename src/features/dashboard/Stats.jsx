import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

export function Stats({ bookings, stays, numDays, cabinCount }) {
  //    1.
  const numBookings = bookings?.length;

  //    2.
  const sales = bookings?.reduce((acc, curr) => acc + curr.totalPrice, 0);

  //    3.
  const checkin = stays?.length;

  //    4.
  const occupation =
    stays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);
  //   num check in nights /all available nights (num days *num of Cabins)

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-in"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkin}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "% "}
      />
    </>
  );
}
