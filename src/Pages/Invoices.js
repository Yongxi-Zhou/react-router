import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom";
import { getInvoices } from "../components/getter";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
//setSearchParams() is putting the ?filter=... search params in the URL and rerendering the router.
//把输入的值扔到filter里，再通过startsWith与invoice匹配
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
          <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            console.log(filter);
            if (filter) {
                //set the value of the input to whatever is in the filter search param
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices
        .filter(invoice => {
            let filter = searchParams.get("filter");
            // console.log(searchParams);s
            if (!filter) return true;
            console.log(invoice);
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })


        .map(invoice => (
        //   <Link
        //     style={{ display: "block", margin: "1rem 0" }}
        //     to={`/invoices/${invoice.number}`}
        //     key={invoice.number}
        //   >
        //     {invoice.name}
        //   </Link>

        //NavLink 新特性 根据Active选择style
        <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
}