import React from "react"

function Notif() {
    const [notif, SetNotif] = React.useState(["1", "2", "3"])
    return (
        <div>
            {!(notif.length) ? <p>You're all caught up!</p> : <p>You have {notif.length} unread {notif.length === 1 ? "message." : "messages."}</p>}
        </div>
    )
}

export default Notif