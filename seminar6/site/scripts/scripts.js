function addProductCards(products) {
    const contentDiv = document.querySelector('div.banners');

    products.forEach((product, index) => {
        const bannerDiv = document.createElement('div');
        bannerDiv.classList.add('banner');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add(`img${index + 1}`, 'fetured_items__img');

        const hoverBlockDiv = document.createElement('div');
        hoverBlockDiv.classList.add('fetured_items__hover-block');

        const aTag = document.createElement('a');
        aTag.href = product.link;

        const boxDiv = document.createElement('div');
        boxDiv.classList.add('box');

        const boxImgDiv = document.createElement('div');
        boxImgDiv.classList.add('box__img');

        const img = document.createElement('img');
        img.src = product.cartimg;
        img.alt = 'Product cart';

        const boxTextDiv = document.createElement('div');
        boxTextDiv.classList.add('box__text');

        const pTag = document.createElement('p');
        pTag.innerHTML = 'Add to Cart';

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');

        const titleLink = document.createElement('a');
        titleLink.href = product.link;

        const titleP = document.createElement('p');
        titleP.classList.add('title');
        titleP.textContent = product.title;

        const subTitleP = document.createElement('p');
        subTitleP.classList.add('sub-title');
        subTitleP.innerHTML = product.subtitle;

        const priceP = document.createElement('p');
        priceP.classList.add('price');
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        priceP.innerHTML = formatter.format(product.price);

        imgDiv.appendChild(hoverBlockDiv);
        hoverBlockDiv.appendChild(aTag);
        aTag.appendChild(boxDiv);
        boxDiv.appendChild(boxImgDiv);
        boxImgDiv.appendChild(img);
        boxDiv.appendChild(boxTextDiv);
        boxTextDiv.appendChild(pTag);

        textDiv.appendChild(titleLink);
        titleLink.appendChild(titleP);
        textDiv.appendChild(subTitleP);
        textDiv.appendChild(priceP);

        bannerDiv.appendChild(imgDiv);
        bannerDiv.appendChild(textDiv);

        contentDiv.appendChild(bannerDiv);
    });
}

const products = [
    {
        "title": "ELLERY X M'O CAPSULE",
        "subtitle": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "link": "#",
        "cartimg": "./img/cart.svg"
    },
    {
        "title": "ELLERY X M'O CAPSULE",
        "subtitle": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "link": "#",
        "cartimg": "./img/cart.svg"
    },
    {
        "title": "ELLERY X M'O CAPSULE",
        "subtitle": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "link": "#",
        "cartimg": "./img/cart.svg"
    },
    {
        "title": "ELLERY X M'O CAPSULE",
        "subtitle": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "link": "#",
        "cartimg": "./img/cart.svg"
    },
    {
        "title": "ELLERY X M'O CAPSULE",
        "subtitle": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "link": "#",
        "cartimg": "./img/cart.svg"
    },
    {
        "title": "ELLERY X M'O CAPSULE",
        "subtitle": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "link": "#",
        "cartimg": "./img/cart.svg"
    }
];

addProductCards(products);
