 import { Logo } from '@/components/atoms/Logo';
import { MenuIcon } from '@/components/atoms/MenuIcons'
import { Socials } from '@/components/atoms/Socials';
import { InfoHeader } from '@/components/molecules/InfoHeader';
import { Header } from '@/components/ui/Header';
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
      // document.body.classList.toggle("no-scroll");
   };

   const closeMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      // document.body.classList.remove("no-scroll");
   };
   return (
      <>
     
         <main className="flex flex-col gap-1">
            <InfoHeader/>
           <Header/>
            {/* <MenuIcon   setIsActive={toggleMenu} isActive={isMenuOpen}/>
            <Socials/>
            <Logo/> */}
            <p>eritatis eligendi ipsum neque in porro quidem. Libero ex provident architecto totam corrupti repellendus voluptates pariatur.
            Tempore iure maxime perferendis esse exercitationem labore, aspernatur delectus ipsam iste? Possimus excepturi repellat maiores praesentium saepe exercitationem officia, a vel fuga ad similique quaerat suscipit voluptate obcaecati at minus.
            Unde distinctio quisquam necessitatibus eligendi, dolores repellendus molestias nulla voluptate, minima similique magni quae sint enim neque velit vitae ipsa tempore deleniti iure quam et quos harum aliquam! Voluptatibus, atque.
            Iusto, commodi? Porro natus dolore fuga libero hic nostrum minus molestias iure laboriosam omnis nesciunt, nihil commodi, quisquam in expedita necessitatibus pariatur a perferendis distinctio numquam laborum earum. Adipisci, esse.
            Sequi necessitatibus assumenda fuga temporibus, soluta repellat, illum itaque voluptates provident quam quisquam earum quod nihil! Nemo atque nobis odit expedita aperiam impedit placeat deleniti velit, inventore facilis beatae aspernatur!
            Repellat nulla voluptates, ducimus repudiandae dolore odio earum? Cum in officiis consectetur quaerat iste quisquam consequuntur a, suscipit mollitia, doloremque autem unde quam sequi, obcaecati facilis excepturi! Eaque, modi hic!
            Nemo cupiditate quas magni sed quo, impedit accusantium amet eveniet excepturi dolores voluptas incidunt. Nihil sunt magnam, impedit quas porro totam modi praesentium ea, aliquid omnis earum vero qui quod.
            Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis qui            Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error.             Deleniti recusandae accusantium fuga in laudantium. Eaque porro corporis fugiat. Asperiores earum dolores eius numquam, quasi quaerat cupiditate ipsam sapiente. Harum at, id praesentium accusamus odit non repudiandae quo deleniti?
            Porro consequuntur ducimus vitae! Temporibus illo autem omnis praesentium, hic in doloremque sit quae, qui alias debitis pariatur corporis. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error. Error tempore, nesciunt quae est sit inventore voluptatum expedita totam ratione.
            Sit, pariatur optio? Iusto doloribus pariatur voluptatem soluta placeat cumque recusandae quam ullam maiores expedita, quod voluptatibus ipsa perspiciatis ea iure fuga in magni itaque nobis? Quaerat perspiciatis quibusdam error. busdam error.</p>

          
         </main>
      </>
   )
}
