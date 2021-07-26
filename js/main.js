const cardsData = [
  {
    name: "Lagavulin 1964",
    discription: `The smoky, peated Lagavulin is seen as the ultimate expression of the Islay region. Lagavulin Distiller’s Edition is double- matured in Pedro Ximenez cask wood, a wine derived from intensely flavoured sun - dried grapes, expertly selected for its raisiny sweetness to magically accentuateand deepen every aspect of the intense, rich character of Lagavulin.This expression of Lagavulin was awarded a Gold medal at the International Spirits Challenge between 2008 and 2010. A very enjoyable malt, Lagavulin Distiller’s Edition makes a perfect gift for lovers of Lagavulin and peaty and powerful whiskies. Distilled in 2003. Bottled in 2019.`,
    body: "Full and rich.",
    nose: `Satisfying and enticing; intense peat, vanilla. A raisiny sweetness checks the smoke. Crisp, roasty malt.`,
    characteristics_1: "70cl 43% ",
    characteristics_2: "120,33 £",

    img: "./img/lagavulin_1954_big.png",
  },
  {
    name: "Lagavulin 21",
    discription: `Lagavulin is one of the most legendary single malt brands and has been crafted on the shores of Islay for more than 200 years – mirroring the meticulous calculation and tenacity employed by the Lannisters in their rise to conquer the Iron Throne. This single malt whisky is a roaring single malt that recalls the Lannister's riches.`,
    body: "Light, golden colour.",
    nose:
      "The nose is characteristically Lagavulin with the sweet smoke that explodes on the nose with a little more brine than the other expressions.",
    characteristics_1: "70cl 46% ",
    characteristics_2: "99,76 £",
    img: "./img/lagavulin_21_big.png",
  },
  {
    name: "Lagavulin 16",
    discription: `Aged in oak casks for at least 16 years, this much sought-after Single Malt has the massive peat-smoke flavour that's typical of southern Islay, while also offering richness and a dryness that turns it into a truly interesting dram.`,
    body: "Full, rich bodied.",
    nose:
      "Intensely flavoured, peat smoke with iodine and seaweed and a rich, deep sweetness.",
    characteristics_1: "70cl 46% 84,80 £",
    characteristics_2: "4,80 £",
    img: "./img/lagavulin_16_big.png",
  },
  {
    name: "Lagavulin 12",
    discription: `LA classic stripped-down ‘acoustic’ Lagavulin, pure in style and from spirit specially selected for its high peating levels, this is a Lagavulin purist’s dream; wonderfully simple, and all the better for it.`,
    body: "Medium.",
    nose: "A mild nose overall, with light prickle. Classic Lagavulin.",
    characteristics_1: "70cl 43% 7",
    characteristics_2: "0,64 £",
    img: "./img/lagavulin_12_big.png",
  },
  {
    name: "Lagavulin 8",
    discription: `Aged in oak casks for at least 16 years, this much sought-after Single Malt has the massive peat-smoke flavour that's typical of southern Islay, while also offering richness and a dryness that turns it into a truly interesting dram.`,
    body: "Full, rich bodied.",
    nose:
      "Intensely flavoured, peat smoke with iodine and seaweed and a rich, deep sweetness.",
    characteristics_1: "70cl 46% ",
    characteristics_2: "50,84 £",
    img: "./img/lagavulin_8_big.png",
  },
];

const cardsStore = document.getElementById("cards_store");

cardsData.forEach((card) => {
  const divCard = document.createElement("div");
  console.log(divCard);
  divCard.innerHTML = `
     <div class="lagavulin__store-card__main-store__img">
            <img src=${card.img} alt="lagavulin 16" style="width: 77%;">
          </div>
          <div class="lagavulin__store-card__main-characteristics">
            <p>${card.characteristics_1}<br>
              ${card.characteristics_2}</p>
          </div>
          <div class="lagavulin__store-card__main-description">
            <span class="description-bold">${card.name.toUpperCase()}</span> 
            <p>${card.discription} <br>
              <span>BODY</span>  <br>
              ${card.body} <br>
              <span>NOSE</span>  <br>
              ${card.nose}</p>
          </div>
          <div class="lagavulin__store-card__main-btn">
            BUY
          </div> 
    `;
  console.log(divCard);
  cardsStore.append(divCard);
});
