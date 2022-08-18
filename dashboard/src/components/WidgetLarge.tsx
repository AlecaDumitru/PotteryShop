import "./styles/widgetLarge.css"

const WidgetLarge = () => {
    // @ts-ignore
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type} >{type}</button>
    }
    return (
        <div className="widgetLg">
           <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved  "/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImg" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr> <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img className="widgetLgImg" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2Jun 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus"><Button type="Approved"/></td>
            </tr>

            </table>
        </div>
    );
};

export default WidgetLarge;