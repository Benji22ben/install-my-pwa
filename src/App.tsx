export default function App() {
  const isMobile = false;

  return (
    <>
      <h1 className="text-6xl font-bold text-center">Install My PWA</h1>
      <button>Installer notre application</button>
      <span>
        Notre site web est installable sous la forme d'une application{" "}
        {isMobile ? "mobile" : "desktop"}.
      </span>
      {!isMobile && (
        <span>
          Pour une meilleure expérience avec notre application, téléchargez
          Google Chrome !{/* Lien vers Google Chrome ? */}
        </span>
      )}
      {/* Logo des navigateurs */}
      <span>Compatible avec :</span>
      <div className="flex flex-row">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <span>
        Grâce à l'installation de l'application sur votre appareil il vous sera
        possible d'utiliser de nouvelles fonctionnalitées tels que :
      </span>
      {/* Liste des fonctionnalitées détectées en fonction de l'appareil */}
      <ul>
        <li>Notification</li>
        <li>Bluetooth</li>
        <li>NFC</li>
        <li>Geolocalisation</li>
        <li>...</li>
      </ul>
    </>
  );
}
