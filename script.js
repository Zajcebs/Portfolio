            const a = document.querySelector('.projekty')
            let h = document.querySelector('.hour')
            let l = document.querySelector('.lines')
            let c = document.querySelector('.cours')
            let y = document.querySelector('.years')

            let time = 0;

            window.addEventListener("scroll",()=>{
                let scroll = Math.floor(window.scrollY);
                if(scroll > 2100)
                {
                    setInterval(() => {
                       if(time <= 78){
                            time++;
                            h.textContent=`${time}`;
                        }
                    }, 100);

                    setInterval(() => {
                        if(time <= 150){
                             time++;
                             l.textContent=`${time}`;
                         }
                     }, 100);
      
                    setInterval(() => {
                        if(time <= 11){
                             time++;
                             y.textContent=`${time}`;
                         }
                     }, 100);
          
                    setInterval(() => {
                        if(time <= 19){
                             time++;
                             c.textContent=`${time}`;
                         }
                     }, 100);
                }
            })
 
//////////////////////////////////////////////

            const code1 = () => {
                const main = document.querySelector('.main')
                let tic = 1;
                setInterval(() => {

                        if (tic <= 4) {
                            main.style.backgroundImage=`url(zdj${tic}.JPG)`;
                            main.style.backgroundColor=`rgba(0, 0, 0,);`
                            tic++;
                        }
                        else if(tic >4){
                            tic =1
                        }

  
                }, 3000);       
            }
            document.addEventListener('DOMContentLoaded',code1);

/////////////////////////////////////////////
        
        const txt = document.querySelector('.jd');
        
        const code = () => {
            let table = ['Jestem Maciej Zajączek','Jestem Web Developerem(*Nigdy nie bede*)','Potrafie robic piekne strony(*nie potrafie xd*)','Salamalecooooo malecoooo salaaaaaaa'] 
            setInterval(() => {
                const sum = Math.floor(Math.random()*table.length);
                txt.textContent=table[sum]
            }, 2000);           
        }
        document.addEventListener('DOMContentLoaded',code)


/////////////////////////////////////////////////////////////

        const body = document.querySelector('body');
        const menu = document.querySelector('header');
        window.addEventListener('scroll', ()=>{
            let scroll = window.scrollY / 900
            menu.style.backgroundColor=`rgba(0,0,0,${scroll})`
        })

       
/////////////////////////////////////////////////////////////


        const btn = document.querySelector('.btn');
        let las = 0;
        const codee = () => {
            const dropd = document.querySelector('.dropdown-content');
            const dad = document.querySelector('.dad');
            dropd.style.display='flex'
            dad.style.display='flex'
        }
        btn.addEventListener('click', codee);