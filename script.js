
const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: "Spicy rice cakes, serving with fish cake.",
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: "Boiling vegetables, serving with special hot sauce",
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "data:image/jpeg;base64,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",
        desc: "Dan dan noodle, serving with green onion",
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: "Yangzhou style fried rice, serving with bean and pickles",
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: "Rice Sandwich, serving with soy sauce",
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: "Black bean sauce noodle, serving with green onion",
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: "Hot pepper sauce noodle, serving with soy bean and onion",
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: "Red bean paste dessert, serving with honey.",
    },
];
document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.btn-item');
            const menuItems = document.querySelectorAll('.menu-items');

            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-id'); // Kategoriyi almak için doğru öznitelik adı
                    
                    menuItems.forEach(item => {
                        if (category === 'All' || item.getAttribute('data-category') === category) {
                            item.style.display = 'block'; // Göster
                        } else {
                            item.style.display = 'none';  // Gizle
                        }
                    });
                });
            });

            // Başlangıçta tüm menü öğelerini göstermek için
            const allButton = document.querySelector('button[data-id="All"]');
            if (allButton) {
                allButton.click(); // Sayfa yüklendiğinde "All" butonuna tıklama simülasyonu
            }
        });

