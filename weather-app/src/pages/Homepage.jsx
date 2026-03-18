import { Header } from "../components/Header";
export function Homepage() {
  return (
    <>
      <title>
        Weather app
      </title>
      <link rel="icon" href="../../public/favicon.png" />

      <div className="bg-white min-h-screen flex flex-col w-screen">
        <div className="mb-10">
          <Header />
        </div>

        <img src="../../public/homepage-bg.jpg" className="w-screen h-auto object-cover" />

        <section className="w-screen mt-16">
          <p className="font-thin text-olive-900 flex justify-center w-screen mb-4">
            Hey this is my first react app and I'll love to make it make sense here on out and make everything responsive on the fly.
          </p>
          <article className="font-thin ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga aut est veritatis sint sit, praesentium earum natus consectetur pariatur amet, tempora asperiores odio maxime quia, molestiae eaque vero et eveniet! Fuga omnis in tempore sequi culpa a facere inventore eos voluptates qui recusandae architecto quasi doloremque illum sit modi tempora at provident, esse necessitatibus. Rem labore perferendis repudiandae autem nemo modi suscipit soluta fugiat facilis quia a culpa ab consequuntur animi illo, obcaecati nesciunt nam architecto nulla aperiam vero minima excepturi. Delectus nobis neque qui quos ratione sapiente nostrum voluptas, excepturi magnam at perspiciatis exercitationem veritatis vero deserunt, eaque rerum cupiditate consectetur cumque aliquam officia. Possimus consequuntur veritatis deleniti numquam hic dolorum corrupti exercitationem, perspiciatis recusandae esse fugiat natus maiores aut adipisci odit, blanditiis necessitatibus minus, officia quaerat? Iusto impedit aut laudantium debitis quo! Ipsa amet, sunt possimus totam magni architecto laudantium repudiandae, mollitia placeat est eaque consequatur perspiciatis facere accusantium voluptatem tenetur eligendi numquam animi quas. Reprehenderit, quisquam tempora quas perspiciatis officia, velit magni alias architecto deserunt eligendi impedit eius deleniti praesentium esse rerum. Minima pariatur officiis fugit repudiandae! Ipsam totam quam iste reprehenderit. Quisquam asperiores ex beatae? Quis, delectus fugit minima sed ducimus dolores tenetur amet incidunt!
          </article>

          <span className="text-center">
            End
          </span>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 px-4 w-screen h-auto mb-4">
          <div className="bg-indigo-200 p-4 w-full rounded hover:bg-indigo-200/70 hover:shadow-inner">
            1
          </div>
          <div className="bg-indigo-200 hover:bg-indigo-200/70 p-4 w-full rounded hover:shadow-inner">
            2
          </div>
          <div className="bg-indigo-200 hover:bg-indigo-200/70 p-4 w-full rounded hover:shadow-inner">
            3
          </div>
          <div className="bg-indigo-200 hover:bg-indigo-200/70 p-4 w-full rounded hover:shadow-inner">
            4
          </div>
        </div>
      </div>
      <footer className="text-white font-thin text-sm text-center mt-4 w-screen p-4 bg-slate-800">
        © 2026 My Website. All rights reserved
      </footer>
    </>
  )
};