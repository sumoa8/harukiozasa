if (window.matchMedia( "(max-width: 700px)" ).matches) {
    /* ウィンドウサイズが 700px以下の場合のコードをここに */

    (function(){
        if ( $('input[name="check"]').prop('checked') )
    console.debug('チェックされていますよ (prop)');
        else
        console.debug('チェックされていませんよ (prop)');

    })();

    /*// (function(){
    //     const $ = document.body;
    //     const $title = $.querySelector('.js-title');
    //     const $wood = $.querySelector('.js-wood');
    //     let isVisibleWood = false;
    //     const showWood = function(){
    //         Velocity(
    //             $wood,
    //             {
    //                 opacity: 1
    //             },
    //             {
    //                 duration: 800,
    //                 complete: function(){
    //                     isVisibleWood = true;
    //                 }
    //             }
    //         );
    //     }
    //     const showTitle = function(){
    //         Velocity(
    //             $title,
    //             {
    //                 opacity: 1
    //             },
    //             {
    //                 duration: 800,
    //                 complete: showWood
    //             }
    //         );
    //     }
    //     showTitle();
        
    
    // //  ここから花びらの演出
    
    //    const $pageLinks = Array.from($.querySelectorAll('.js-page_link'));
    //    $pageLinks.forEach(function($link){
    //        const $image = $link.querySelector('img');
    //        let isShowed = false;
    //        $link.addEventListener('mouseover', function(){
    //            if(isShowed) return;
    //            if(isVisibleWood === false) return;
    //            isShowed = true;
    //            Velocity(
    //                $image,
    //                {
    //                    transform: ['scale(1)', 'scale(0)']
    //                },
    //                {
    //                    duration: 300,
    //                    complete: function(){
    //                     showBackground($link)
    //                    },
                        
    //                }
    //             );
    //         })
    //     })
        
    //     //  ここから花びらのリンクの背景出現演出
    //     const showBackground = function($link){
    //         const $anchor = $link.querySelector("a")
    //         Velocity(
    //             $anchor,
    //             {
    //                 opacity: 1,
    //                 transform: ['scaleX(1)', 'scaleX(0)']
    //             },
    //             {
    //                 duration: 300,
    //                 complete: function(){
    //                     showText($link)
    //                 }
    //             }
    //         );
    //     }
    
    //     //  ここから花びらのリンクの文字出現演出
    //     const showText = function($link){
    //         const $text = $link.querySelector("p")
    //         Velocity(
    //             $text,
    //             {
    //                 opacity: 1
    //             },
    //             {
    //                 duration: 300,
    //                 complete: function (){
    //                     spinFlower($link)
    //                 }
    //             }
    //         );
    //     }
    
    //     // const spinFlower = function($link){
    //     //     const $image = $link.querySelector('img');
    //     //     Velocity(
    //     //         $image,
    //     //         {
    //     //             transform: ['rotate(360deg)','rotate(0deg)']
    //     //         },
    //     //         {
    //     //             duration: 3000,
    //     //             easing: 'linear',
    //     //             complete: function (){
    //     //                 spinFlower($link)
    //     //             }
    //     //         }
    //     //     )
    //     // }
    
    //     const spinFlower = function($link){
    //         const $spinImage = $link.querySelector('.spin');
    //         Velocity(
    //             $spinImage,
    //             {
    //                 transform: ['rotate(360deg)','rotate(0deg)']
    //             },
    //             {
    //                 duration: 3000,
    //                 easing: 'linear',
    //                 complete: function (){
    //                     spinFlower($link)
    //                 }
    //             }
    //         )
    //     }
    
    //     //  ここからコンタクトの演出
    
    //     const $contactPageLinks = Array.from($.querySelectorAll('.js-contact_link'));
    //     $contactPageLinks.forEach(function($contact_link){
    //         const $contact_image = $contact_link.querySelector('img');
    //         let isShowed = false;
    //         $contact_link.addEventListener('mouseover', function(){
    //             if(isShowed) return;
    //             if(isVisibleWood === false) return;
    //             isShowed = true;
    //             Velocity(
    //                 $contact_image,
    //                 {
    //                     transform: ['scale(1)', 'scale(0)']
    //                 },
    //                 {
    //                     duration: 300,
    //                     complete: function(){
    //                     showBackground($contact_link)
    //                     },
                        
    //                 }
    //             );
    //         })
    //     })
    
    //     //  ここから花びらのリンクの背景出現演出
    //     const showContactBackground = function($contact_link){
    //         const $contact_anchor = $contact_link.querySelector("a")
    //         Velocity(
    //             $contact_anchor,
    //             {
    //                 opacity: 1,
    //                 transform: ['scaleX(1)', 'scaleX(0)']
    //             },
    //             {
    //                 duration: 300,
    //                 complete: function(){
    //                     showContactText($contact_link)
    //                 }
    //             }
    //         );
    //     }
    
    //     //  ここから花びらのリンクの文字出現演出
    //     const showContactText = function($contact_link){
    //         const $contact_text = $contact_link.querySelector("p")
    //         Velocity(
    //             $contact_text,
    //             {
    //                 opacity: 1
    //             },
    //             {
    //                 duration: 300,
    //                 complete: function (){
    //                     spinFlower($contact_link)
    //                 }
    //             }
    //         );
    //     }
    
            
    // })();
    /* ウィンドウサイズが 700px以下の場合のコードをここまで */
    


    } else {


        /* ウィンドウサイズが 700px以上場合 */
        (function(){
            const $ = document.body;
            const $title = $.querySelector('.js-title');
            const $wood = $.querySelector('.js-wood');
            let isVisibleWood = false;
            const showWood = function(){
                Velocity(
                    $wood,
                    {
                        opacity: 1
                    },
                    {
                        duration: 800,
                        complete: function(){
                            isVisibleWood = true;
                        }
                    }
                );
            }
            const showTitle = function(){
                Velocity(
                    $title,
                    {
                        opacity: 1
                    },
                    {
                        duration: 800,
                        complete: showWood
                    }
                );
            }
            showTitle();
            
        
        //  ここから花びらの演出
        
           const $pageLinks = Array.from($.querySelectorAll('.js-page_link'));
           $pageLinks.forEach(function($link){
               const $image = $link.querySelector('img');
               let isShowed = false;
               $link.addEventListener('mouseover', function(){
                   if(isShowed) return;
                   if(isVisibleWood === false) return;
                   isShowed = true;
                   Velocity(
                       $image,
                       {
                           transform: ['scale(1)', 'scale(0)']
                       },
                       {
                           duration: 300,
                           complete: function(){
                            showBackground($link)
                           },
                            
                       }
                    );
                })
            })
            
            //  ここから花びらのリンクの背景出現演出
            const showBackground = function($link){
                const $anchor = $link.querySelector("a")
                Velocity(
                    $anchor,
                    {
                        opacity: 1,
                        transform: ['scaleX(1)', 'scaleX(0)']
                    },
                    {
                        duration: 300,
                        complete: function(){
                            showText($link)
                        }
                    }
                );
            }
        
            //  ここから花びらのリンクの文字出現演出
            const showText = function($link){
                const $text = $link.querySelector("p")
                Velocity(
                    $text,
                    {
                        opacity: 1
                    },
                    {
                        duration: 300,
                        complete: function (){
                            spinFlower($link)
                        }
                    }
                );
            }
        
            // const spinFlower = function($link){
            //     const $image = $link.querySelector('img');
            //     Velocity(
            //         $image,
            //         {
            //             transform: ['rotate(360deg)','rotate(0deg)']
            //         },
            //         {
            //             duration: 3000,
            //             easing: 'linear',
            //             complete: function (){
            //                 spinFlower($link)
            //             }
            //         }
            //     )
            // }
        
            const spinFlower = function($link){
                const $spinImage = $link.querySelector('.spin');
                Velocity(
                    $spinImage,
                    {
                        transform: ['rotate(360deg)','rotate(0deg)']
                    },
                    {
                        duration: 3000,
                        easing: 'linear',
                        complete: function (){
                            spinFlower($link)
                        }
                    }
                )
            }
        
            //  ここからコンタクトの演出
        
            const $contactPageLinks = Array.from($.querySelectorAll('.js-contact_link'));
            $contactPageLinks.forEach(function($contact_link){
                const $contact_image = $contact_link.querySelector('img');
                let isShowed = false;
                $contact_link.addEventListener('mouseover', function(){
                    if(isShowed) return;
                    if(isVisibleWood === false) return;
                    isShowed = true;
                    Velocity(
                        $contact_image,
                        {
                            transform: ['scale(1)', 'scale(0)']
                        },
                        {
                            duration: 300,
                            complete: function(){
                            showBackground($contact_link)
                            },
                            
                        }
                    );
                })
            })
        
            //  ここから花びらのリンクの背景出現演出
            const showContactBackground = function($contact_link){
                const $contact_anchor = $contact_link.querySelector("a")
                Velocity(
                    $contact_anchor,
                    {
                        opacity: 1,
                        transform: ['scaleX(1)', 'scaleX(0)']
                    },
                    {
                        duration: 300,
                        complete: function(){
                            showContactText($contact_link)
                        }
                    }
                );
            }
        
            //  ここから花びらのリンクの文字出現演出
            const showContactText = function($contact_link){
                const $contact_text = $contact_link.querySelector("p")
                Velocity(
                    $contact_text,
                    {
                        opacity: 1
                    },
                    {
                        duration: 300,
                        complete: function (){
                            spinFlower($contact_link)
                        }
                    }
                );
            }
        
                
        })();
    }