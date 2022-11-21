import Header from "../components/Header";

export default function About() {
  return (
    <div className="bg-background w-full h-screen">
      <Header />
      <div className=" w-full h-full flex items-center justify-center text">
        <div className="relative w-4/5 bg-vscode-background rounded-xl overflow-hidden ">
          <div className="w-full h-10 bg-vscode-header"></div>
          <div className="w-4 z-1 h-4 left-2 top-3  absolute rounded-full bg-vscode-red"></div>
          <div className="w-4 z-1 h-4 left-8 top-3  absolute rounded-full bg-vscode-grey"></div>
          <div className="w-4 z-1 h-4 left-14 top-3  absolute rounded-full bg-vscode-green"></div>
          <div className="text-white text-sm font-mono m-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            quasi hic tempore neque unde id labore, quisquam sapiente
            reprehenderit ipsum, vero officia, et eum! Mollitia distinctio
            officia reiciendis vero laborum voluptatum corrupti, ex provident
            vitae totam ratione voluptates autem nemo ipsam harum atque
            aspernatur temporibus ipsa quae eveniet quisquam dolorem minima?
            Temporibus facilis quam, necessitatibus modi ipsa nisi odit
            inventore repudiandae consectetur reprehenderit obcaecati mollitia
            recusandae maiores voluptates deleniti quos exercitationem
            perferendis, incidunt excepturi accusantium nemo dolor. Sit error
            doloribus harum assumenda placeat inventore, rem sunt asperiores
            optio officiis saepe non culpa, fuga possimus ad autem earum
            cupiditate ipsam! Obcaecati.
          </div>
        </div>
      </div>
    </div>
  );
}
