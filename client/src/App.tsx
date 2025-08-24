function App() {
  console.log("App component rendering...");
  console.log("Current location:", window.location.href);
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Mobeen Butt</h1>
        <p className="text-xl text-gray-700 mb-2">Full Stack Developer</p>
        <p className="text-gray-600">Portfolio is loading successfully!</p>
        <div className="mt-4 text-sm text-gray-500">
          <p>Location: {window.location.href}</p>
          <p>Pathname: {window.location.pathname}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
