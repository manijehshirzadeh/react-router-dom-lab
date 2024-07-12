import NavBar from "./NavBar";
// import { MailboxDetails } from "./MailboxDetails";
import MailboxForm from "./MailboxForm";
import MailboxList from "./MailboxList";
import MailboxDetails from "./MailboxDetails";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    {
      _id: 1,
      boxSize: "Small",
      boxholder: "Alex",
    },
  ]);

  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="/" element={<h1>Post Office</h1>} />
      </Routes>
    </>
  );
};

export default App;
