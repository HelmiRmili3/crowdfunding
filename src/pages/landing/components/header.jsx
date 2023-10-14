import React from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const handleConnectWallet = ()=> 
   {
    console.log('Connect Wallet clicked');
    navigate('/login',{ replace: true })
    
  };
  return (
    <header className="bg-blue-500 text-white py-4  top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <h1>Crowdfunding </h1>
        </div>
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Header;
