$('.inf-item').each(() => {
    let itemActive = $(this).find('.inf-link:not(.inf-link--active)')
    $(this).click(() =>{
        if(itemActive){
            itemActive.addClass('.inf-link--active')
        }
    })
})

$(function(){



 

    var moveClass = (cls)=>{

        x =  $('.inf-list').find(`[class*="${cls}"]`)

        x.each((i,item)=>{
            $(item).removeClass(cls)
        }) 
       
    }


    var menuOnClick = ()=>{ 
        
        $('.inf-item').click((item)=>{
            moveClass('inf-link--active')
            let _new = item.target
            // let _new = $(item).find('[class="inf-link"]')

           
                $(_new).addClass('inf-link--active')
                console.log(_new)
           
               
        })
     

    }

    menuOnClick()
})