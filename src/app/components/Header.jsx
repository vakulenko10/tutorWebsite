"use client"
import React, { useState , useRef} from 'react';
import Container from './Container'
import {motion, animate} from 'framer-motion'
const Header = () => {
    const [isChecked, setIsChecked] = useState(false);
    const input = useRef(null)
    const hideHeader = () =>{
        input.current.click();
    }
    const handleToggle = () => {
      
      setIsChecked(!isChecked);
    };
    // input.value = !input.value;
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
   
      if (section) {
          const y = section.getBoundingClientRect().top + window.pageYOffset - 70; // Adjust the offset as needed

          // Animate the scroll using Framer Motion's animate function
          animate(window.scrollY, y, {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,
            onUpdate: (latest) => {
                window.scrollTo(0, latest);
            }
        });
      }
  };
 
   
    const handleLinkClick = (id) =>{
      handleToggle();
      scrollToSection(id);
    }
  return (
    <header>
  <nav className="z-10 w-full absolute ">
    <Container>
      <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
        <input
          aria-hidden="true"
          type="checkbox"
          name="toggle_nav"
          ref={input}
          id="toggle_nav"
          onClick={handleToggle}
          className="hidden peer"
        />
        <div className="group relative z-20 w-full flex justify-between lg:w-max md:px-0">
          <a
            href="#home"
            aria-label="logo"
            className="flex space-x-2 items-center"
          >
            <div aria-hidden="true" className="flex space-x-1">
            <svg width="1024" height="1024" viewBox="0 0 1024 1024" className=" fill-primary w-10 h-10  md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg">
<path d="M492.852 664.7C504.008 663.836 530.412 663.308 540.466 666.31C551.078 669.478 556.464 678.35 561.408 687.51C566.458 696.864 570.902 706.582 575.636 716.1C583.617 732.101 591.709 748.046 599.912 763.936L618.486 799.664C622.74 807.824 627.832 816.352 630.658 825.14C632.836 831.914 633.248 838.946 631.152 845.798C628.332 855.012 621.198 862.582 612.728 866.952C604.272 871.316 594.654 873.068 585.454 870.088C578.402 867.802 572.072 862.81 567.486 857.064C559.522 847.082 554.704 833.97 548.964 822.596L519.658 765.288C517.106 760.568 514.068 756.046 512.056 751.06C501.71 772.494 490.202 793.494 479.432 814.728C472.302 828.788 465.17 847.728 455.432 859.722C449.72 866.756 441.502 869.818 432.654 870.684C422.116 871.714 410.452 867.78 402.354 861.038C396.014 855.762 391.83 848.766 391.086 840.428C390.446 833.26 392.67 825.806 395.412 819.244C400.086 808.058 406.584 797.42 412.324 786.732C420.598 771.314 428.576 755.718 436.682 740.208C441.378 731.222 446.128 722.234 450.546 713.106C456.44 700.93 461.8 686.532 470.562 676.154C476.656 668.936 483.464 665.514 492.852 664.7Z" className="fill-primary group-hover:fill-quaternary group-hover:translate-y-[100px] transition-linear"/>
<path d="M330.646 404.018C344.352 408.28 364.1 419.424 377.428 426.184L449.688 462.208C463.988 469.316 478.434 477.424 493.302 483.226C501.504 486.428 509.558 488.348 518.33 486.65C538.504 482.75 572.558 464.028 591.918 454.392C626.776 437.042 661.18 419.096 696.876 403.5C697.404 414.818 697.426 426.228 697.472 437.558C697.616 473.896 694.518 499.344 678.008 532.26C671.72 544.91 663.664 556.232 654.402 566.864C634.52 589.692 612.61 605.232 584.732 616.958C538.352 636.468 483.528 634.99 437.306 615.962C396.466 599.152 358.3 560.686 341.49 520.002C328.878 489.48 324.928 454.902 327.802 422.15C328.288 416.594 328.528 409.146 330.646 404.018Z" className="fill-primary transition-linear group-hover:fill-quaternary"/>
<path d="M511.97 151.664C513.648 151.574 515.332 151.482 517.012 151.474C523.496 151.444 529.58 153.2 535.442 155.857C542.984 159.275 550.216 163.478 557.494 167.428C570.79 174.721 584.129 181.936 597.51 189.073L721.534 253.95L752.07 269.782C762.826 275.26 775.816 279.984 784.46 288.586C788.886 292.992 790.446 297.54 791.314 303.548C792.356 310.77 791.798 318.19 791.618 325.456C791.445 332.92 791.362 340.385 791.37 347.852L791.224 447.39C797.284 455.382 803.734 461.06 803.8 471.99C803.85 480.368 799.998 488.462 794.076 494.274C787.554 500.674 778.492 504.574 769.308 504.376C760.27 504.182 751.624 500.74 745.402 494.106C744.735 493.403 744.102 492.672 743.502 491.914C742.902 491.154 742.338 490.368 741.81 489.556C741.282 488.745 740.792 487.912 740.34 487.056C739.888 486.2 739.475 485.325 739.102 484.432C738.73 483.537 738.399 482.628 738.11 481.706C737.821 480.782 737.574 479.846 737.37 478.9C737.166 477.953 737.005 476.999 736.888 476.038C736.771 475.078 736.697 474.114 736.668 473.146C736.242 459.06 745.46 453.244 746.326 441.818C747.118 431.324 746.47 420.35 746.456 409.81C746.418 382.892 745.714 355.742 746.644 328.844C734.458 334.038 722.646 340.564 710.808 346.516C691.595 356.289 672.28 365.856 652.864 375.218L569.642 416.6C557.25 422.764 527.654 439.33 515.988 441.324C509.582 442.42 500.89 439.124 495.102 436.636C486.782 433.06 478.886 428.504 470.864 424.314C460.538 418.922 450.102 413.73 439.712 408.464L338.096 357.718C320.611 348.971 303.07 340.338 285.474 331.818C273.742 326.212 260.796 321.326 250.004 314.026C245.606 311.05 240.584 307.126 239.704 301.556C239.018 297.22 240.236 292.734 242.796 289.204C245.804 285.056 250.396 282.24 254.818 279.804C261.132 276.328 267.832 273.392 274.31 270.222C283.19 265.8 292.045 261.331 300.876 256.814L390.58 211.014L462.846 173.758C474.65 167.608 486.27 160.699 498.38 155.182C502.592 153.263 507.412 152.347 511.97 151.664Z" className="fill-primary group-hover:fill-quaternary group-hover:translate-y-[-100px] transition-linear"/>
<path d="M513.736 261.162C521.174 260.454 528.864 262.43 534.74 267.134C540.934 272.092 544.732 279.876 545.582 287.694C546.484 295.982 544.41 304.372 539.124 310.898C533.488 317.858 525.804 320.898 517.122 321.844C509.98 322.206 502.974 320.662 497.14 316.37C490.44 311.444 486.168 303.92 484.92 295.736C483.738 287.994 485.392 279.704 490.204 273.418C496.006 265.838 504.584 262.53 513.736 261.162Z" className="fill-primary group-hover:fill-quaternary  "/>
</svg>
            </div>
            <span className="text-2xl ml-0 font-bold text-quaternary dark:text-quaternarydark ">
              AcademyForU
            </span>
          </a>
          <div className="relative flex items-center lg:hidden max-h-10">
            <label
              role="button"
              htmlFor="toggle_nav"
              aria-label="humburger"
              id="hamburger"
              className="relative  p-6 -mr-6"
            >
              <div
                aria-hidden="true"
                id="line"
                className={`m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300 ${isChecked ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <div
                aria-hidden="true"
                id="line2"
                className={`m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300 ${isChecked ? '-rotate-45 -translate-y-1' : ''}`}
              />
              
            </label>

          </div>
        </div>
        <div
          aria-hidden="true"
          className="fixed z-100 inset-0 h-screen overflow-y-hidden w-screen bg-secondary/90 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
        />
        <div
          className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100  shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                      lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                      peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                      dark:shadow-none   dark:border-gray-700"
        >
          <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
            <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
              <li>
                <a
                  href="#features"
                  className="block md:px-4 transition hover:text-primary dark:hover:text-primarydark"
                  onClick={()=>handleLinkClick("features")}
                >
                  <span>Про навчання</span>
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="block md:px-4 transition hover:text-primary dark:hover:text-primarydark"
                  onClick={()=>handleLinkClick("solution")}
                >
                  <span>Курси</span>
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block md:px-4 transition hover:text-primary dark:hover:text-primarydark"
                  onClick={()=>handleLinkClick("testimonials")}
                >
                  <span>Відгуки</span>
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="block md:px-4 transition hover:text-primary dark:hover:text-primarydark"
                  onClick={()=>handleLinkClick("blog")}
                >
                  <span>Питання</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 lg:mt-0">
            <a
              href="#"
              className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primarydark before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              onClick={()=>handleLinkClick("features")}
            >
              <span className="relative text-sm font-semibold text-white">
                Зв&apos;язатися
              </span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</header>



  )
}
{/* <style>
    #toggle_nav:checked ~ div #hamburger #line
    {
        @apply rotate-45 translate-y-1.5 
    }

    #toggle_nav:checked ~ div #hamburger #line2
    {
        @apply -rotate-45 -translate-y-1
    }
</style> */}

export default Header