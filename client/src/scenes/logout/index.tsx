import { useTheme } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LogOut = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      await axios.get('http://localhost:1337/api/logout');
      navigate('/');
      console.log("Logout Successful");
    } catch (error) {
      console.error(error);
      console.log("Logout Failed");
    }
  };

  return (
    // <button 
    //     onClick={handleSubmit}
    // >
    //     Logout
    // </button>
    <Link
        to={''}
        onClick={handleSubmit}
        style={{
            color: palette.grey[700],
            textDecoration: 'inherit',
        }}>
        Logout
    </Link>
  );
};

export default LogOut;