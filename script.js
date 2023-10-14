            const a = document.querySelector('.projekty')
            let h = document.querySelector('.hour')
            let l = document.querySelector('.lines')
            let c = document.querySelector('.cours')
            let y = document.querySelector('.years')

            let time = 0;

            window.addEventListener("scroll",()=>{
                let scroll = Math.floor(window.scrollY);
                console.log(scroll)
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
 
        
/////////////////////////////////////////////
        
        const txt = document.querySelector('.animacja');
        
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


        
