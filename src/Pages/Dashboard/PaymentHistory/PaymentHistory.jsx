import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
        <SectionTitle heading={'payment history'} subHeading={'Your Payment'}></SectionTitle>
      <h2 className="text3-xl">Total Payments: {payments.length}</h2>
      <div className="overflow-x-auto rounded-xl">
        <table className="table table-zebra">
          {/* head */}
          <thead className="uppercase font-semibold bg-[#D1A054]">
            <tr>
              <th></th>
              <th>price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
