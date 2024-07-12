import { useParams } from "react-router-dom";

const MailboxForm = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  return (
    <>
      <h1>MailBox {selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </>
  );
};

export default MailboxForm;
