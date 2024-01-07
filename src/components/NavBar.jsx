export default function NavBar() {
  const linkEnter = () => {
    setIsVisible(false);
    console.log("enter");
  };
  const linkLeave = () => {
    setIsVisible(true);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-end z-10 p-10 ">
      <div
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
        className="flex flex-col gap-4 px-0 py-2"
      >
        <ButtonLink text="Home" />
        <ButtonLink text="About" />
        <ButtonLink text="Works" />
        <ButtonLink text="Contact" />
      </div>
    </nav>
  );
}
