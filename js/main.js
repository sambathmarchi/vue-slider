const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            slides: [
                {
                    immagine: 'https://www.hdcarwallpapers.com/walls/2017_bmw_m4_cs_4k-HD.jpg',
                    titolo: 'Bmw M3 F80',
                },
                {
                    immagine: 'https://4kwallpapers.com/images/wallpapers/performmaster-mercedes-amg-c63-v8-final-edition-2022-5k-8k-7680x4320-8327.jpeg',
                    titolo: 'Mercedes C63 AMG',
                },
                {
                    immagine: 'https://www.100hdwallpapers.com/wallpapers/3840x2160/abt_audi_rs_5_r_sportback_2019_4k-hd_wallpapers.jpg',
                    titolo: 'Audi RS5',
                }
            ],
                slideNumber: 0,
                

        }
    },
    methods: {
        next (){
            if(this.slideNumber < this.slides.length -1){
                this.slideNumber++
            }else{
                this.slideNumber = 0
            }
           
        },
        back (){
            if(this.slideNumber > 0){
                this.slideNumber--
            }else{
                this.slideNumber = this.slides.length -1
            }


        }, 
      
    }
}; 

createApp(opzioni).mount('#app')