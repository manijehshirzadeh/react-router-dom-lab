import { Link } from "react-router-dom";

const MailboxList = (props) => {
  console.log(props.mailboxes);
  const mailboxeListItems = props.mailboxes.map((mailbox) => (
    <li key={mailbox._id}>
      <Link to={"/mailboxes/" + mailbox._id}>MailBox {mailbox._id}</Link>
    </li>
  ));

  return (
    <>
      <h1>MailBoxes</h1>
      <ul>{mailboxeListItems}</ul>
    </>
  );
};
export default MailboxList;
