const Footer = () => {
  return (
    <footer className="left-0 w-full max-h-24">
      <div className="flex bg-[#111113] text-white py-20 px-40 justify-between gap-8">
        <div className="flex flex-col gap-4 w-sm">
          <div className="flex items-center gap-4">
            <img src="byway.svg" alt="Byway logo" />
            <span className="font-medium text-4xl">Byway</span>
          </div>

          <p className="text-sm">
            Empowering learners through accessible and engaging online
            education. Byway is an online learning platform dedicated to
            providing high-quality, flexible, and affordable educational
            experiences.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <h4 className="text-2xl text-nowrap">Get Help</h4>
          <ul>
            <li className="text-sm">Contact Us</li>
            <li className="text-sm">Latest Articles</li>
            <li className="text-sm">FAQ</li>
          </ul>
        </nav>

        <nav className="flex flex-col gap-2">
          <h4 className="text-2xl text-nowrap">Programs</h4>
          <ul>
            <li className="text-sm">Art & Design</li>
            <li className="text-sm">Business</li>
            <li className="text-sm">IT & Software</li>
            <li className="text-sm">Languages</li>
            <li className="text-sm">Programming</li>
          </ul>
        </nav>

        <address className="flex flex-col gap-2">
          <h4 className="text-2xl text-nowrap">Contact Us</h4>
          <p className="text-sm">
            Saint-Petersburg, Kronverkskaya st., building 7
          </p>
          <p className="text-sm">Tel: 8(800) 555-35-35</p>
          <p className="text-sm">Mail: bywayedu@webkul.in</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
