import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  boxholder: "",
  boxSize: "",
};

const MailboxDetails = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const _handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    navigate("/mailboxes"); // programmatic navigation
  };

  const _handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={_handleSubmit}>
        <label>
          Enter a Boxholder:
          <input
            placeholder="Boxholder name"
            name="boxholder"
            onChange={_handleChange}
            value={formData.boxholder}
          />
        </label>
        <label>
          Select a Box Size:
          <select onChange={_handleChange} name="boxSize">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <button>Submit</button>
      </form>
    </main>
  );
};
export default MailboxDetails;
