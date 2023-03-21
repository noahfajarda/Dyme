import React, { useEffect } from "react";
import "./Carousel.css";

function Carousel() {
  const text1_options = [
    "Why Handlebars is important",
    "Test yourself with complicated algorithms",
    "Tips on how to Budget your money",
    "How to learn JS in 2 months",
  ];
  const text2_options = [
    "69 min. read",
    "7 min. read",
    "8 min. read",
    "87,658.1277 min. read",
  ];
  const color_options = ["#01081f ", "#01081f", "#01081f", "#01081f"];
  const image_options = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWcAAACMCAMAAACXkphKAAAA9lBMVEX////9/f38/Pw4Jxb/OwD/KQBXV1f/MQD5+fn/NAD/MwBycnL/LAD19fWMjIz/PAAfAAD/xrf/rJr/HQAuGgD/wrf/0cg0Ig8rFQCNjY0dAAAoEAAiAADn5+fQ0NDu7u6vr6/c3Nz/fmf/lIGCgoL/y8HHx8e+vr5oaGj/SBj/jnQlCQCDg4Oenp60tLSmpqb/9PD/2s//qJ6AeHBQUFBjY2P/n4//USj/39r/g23/uK3/6ONLPTBeU0kWAABGRkYrKyv/a03/aUj/XTX/VjD+dlf/sqT/mYJtYViNhH5XST6wp6J8cWpGNym/tK9oXlYcHBw2NjbYb59xAAAPhElEQVR4nO2dCUPiyBLHqyORIIeOQQEhQRwEPBDG+xqdQ13R2dmd7/9lXlVf6SAqM28ws9D/feuGTlOYXyrVVZXgA7CysrKysrKysrKy+s/I2Rx76uYFQP/4Q3xwZd/5zb/RVKrv+p/HnPrZ90/hi4s/DK36/sYEfq2p0zs3tTXm1JNUbhlSKTd2Aay4ma/WoV/Xz3JetJx/Sb+DMwb5Cfxm0yXkfHKx4W8tM3p1up1zl/tbmQvo37gXdxn3ZIXPWrnxv67eGJw/3LruGQVq5PxlOeNmzpmY+NU/+bDibzA497f7t/4dRvBbP3d2+tznz4rInzMLGHVpNbvLpHHrJpM+g2M3s+WmUhl3Gce3/Uwqk1uMOL/HgVSaKK64qUV8U4qvhv0zmpjaSvkfIJdKf0mnfLjz0XranXXQ7zjMHIJagVOfiCCWhQ14n5bbfh/+wjluDskqzss+QvaR4iZxxve7mZR7jPhpIm6n3FXknMqk/c8M7eRymdxx0geasJBz5vPmcobYbiO5/dWNtOScfr96tkDI0F23Vla+ZhRnB/cdewynLBLnzMbpB9y51e9vpVKLm5tbivPC+1XWx3O3eX7jryZ9oAkLOedwFbvNZDbARXxA6x3nTOsbUnI3L3B8hTJtyXn1HN323bt3y+TsyNnH8gXnuKubuVQO48OqKzjnKOR4fiqz3Qcv6eNMWjLfQKwb4BMfgL/SnHN6G7eJs0pJVL6xekxR3OXB5kLldTTxHEdws38jOLu8cjz302n3y6y78yjO20OcVyXnRZPz1uLi4tbNFsWNLYNzBjf7JyZn8M62chkbNwzOW5nMLWKS66DmTAHjWEQYHTdylNz1b1eIM50c/E/69EM6lVsBOaQ4H2P0uMtREJppmZyJ3+3+YmaIM/JP5d5v56J8A+NzbmP/i5/xeb6xuLxPqykArob+8Xs/ZXA+9nMLxxj9TxI+zqRlcnYWFzAXwxw6Hee8SvleOsXzjQwNrPB8Gl+f8HwjQzupvUTQ0+kM0l7Fc8E5n9N7ceAu4eNMWqt+hnN2c2dYDn72Mdc9djGXPnYpIYb0AkXWc0yf3a2vLm5v+CkEenfj5nI59+wCc25/4yvtPSdrfOLnDf+kDydurk9Dfy3Q1LN+kgf5J2jbpdL64usJZmfgbO7vn8Ipkry4/UJoNr9s0yp3cb5/d3GxT9ndOa/s+iv7++c8/m6u9Pvn++eS4wVtOqf46uJOLn0Xd/t3H55+rpWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWV1Vhi9Uar3W6HQX7k7iB8aa/VmGp074tLO6ja0sPB9+G9Ae6t0d6dtcvB48w/4vzLevxYLpfmpErF6tzAdNvWfTG+9yBM7Df9L6t1WdUYJczyXEvvHuwUh/YWywc2fDwrL2wF7Olw/WNtiDJnWRvI3XPlp3vnitXuqE8IGvWJHsJ/QK3LWm1nrTwYDq7tYW9V2uGg68URJ4Hvfhi2FF4urS0tlQ6CtzmgP1L5hyXBq1yMYzhYGo0RRR7tjfJ16fFLrZilxysxtXj1+JZH9kcp/6CdtvjRHP9WfRbz3NzSd/j4jLNzrZl5SRBZuhoVU2ZCAxljKQisRSE0qL6EET36YFRsjnQ1iD6iWxXm+QloJHCMf4AaOxLzt/uiwTn8+9mgIPXyacAodKCD9KBYKn27FG8ofRz9e0y7DsThX2FAfSyvqZQsLL+G+XVV71UGU6nOBZi7yFVgJhNsJkJn8YBezKng+X04af4llS+lR9d5tG6IjyrPZISui5xih/KD4EAOru/8BsqoogLduqef9/zkFQejf5PpVkNwrpLDqUplUPs9mKk6lJliQN8j+odzLv2T1LEmqVAwNVYndv+bvJnbNRLpsDr8UTMkyXmuqq7msPxaIlEqFstVofJzFWGkNdV2qsultfSQ2MEmqIaKEbWDMO954WDtZXKlcvny26D7uEd67A4+zr2SZ8+VH/bqnhfsXUrDs+nPga6tizu1uZ3ai9BK5aW/u0NpWfD929LLqEvVtVJxTWcwxYPRv8l0y3mpuB7iVUPIo3qeiHrttWATaTbzOrgfk1Bx6e/W843lxmBt3JS72nrWyjQrXBuL8tXglZam1/57ZxzSs7kMwlgOXa2OdY/k++UY4WNtNt0Zo+trGUa1OHbTuHF/9Vr2cT/JY/mj1XqpZ1Raevip1nzwrfySueLliLtjs6LWcz1OTJb/+enL3Bs8G6hLOzOZO2sF30bdCCxWHwa/1MOsP96PdOrq3GymdIbC+6uqUUOXitVa7aD96w8IhN25tapZwZfKtVJ35m94AxUbg8vaUo0/dbT0MHgcWZH8hLxGu3tfXKsJizsfuy9k3zMmLx+EpCD/u57eytcbYavVCht5+7ehraysrKysrKysrKysrKysrKysrKysrH6PHBIjiS0HgMUExpYzYpejBx009hP2nGF709z+RxqeI47XkWAIk8N58A3Q1GJQFShHiakX0p7zmj3vqb3pFR2e50SclYspt3SU/6mXJhdm0HWYfPX/2EuaxuRkeBxd9OhthEld+Yb/iVfK/4TDesJ3uQ8LM4YHO+PacyJ7SdOYoIwrV9EAddyaiCfwMf0Pf5vjcenIwYPDOPbYc/aShjFBDa9tUWA1RzztkEwFWzXRc4yh4VBgGIyNGPYEZzEvaRiT0xMoTF7occ56pUOB5gxMTZTrnPMU8qv2KLpIzknDmKDG46IWNxVgRUomo3DM0X/CntxwDHtJ05icRoUNT6UJModQKQVTcGWmEWURfJM5I0EbC2Hcnh5Q8ZlNNee4o4HpmZ7OmiMuoFw5cmJZnoirfxx7zLTHDHtJ05icnuESXd9Rbaf9Nu6tjqM5i2rwJ+2Z1pKmMTkNcRkx42XOPOtV5favcTZmvPnhv5mGFjKvmR1SAM5Q3IhSbj7k8eAqSr9oxXOGwHJ5Os7LmpHHDcNe0jQmJ4lQrEYO5A/rQVyEUfqtrP0cFWxEXueB0Rlx4va0z/PP8ZgMLjF7LLI3xf7MmIHHAW9ejEY/meACMYS60JNjEGXXcXtA7s7UORBVn+IcJdHa3vSKyQaQ+B/k50EkGMLRRLIVTVDZgq5TlLNCFGhNewxknjzKHjy1N73iNDyVXhFnVQzHuptRlCUfjcIzRCleBC2yxyI3H8te0jQmJxY/bvJnfS0LLrJVNIJLVG8YFUvMXjw2vG4vaRqTk4Igj/wJZ6aXSvFCcInezZc3MQzAI4LepzirAaaDhBqYIc4qwIoD5XFDeyqFVgj2ItDg9YC1ANOSXjbbzBYaghW06gwalWazjS9xI9tsZnt12ToBaO/SQCEUn4JrbS/b3G1muwHEI86Uxw3hdmLNF5yN/AxfZENgsokE3RbALkB4tBfkvXq4W+FrIOw2oJdt1T3yx8oubuSDdnZPnAMn223UPZxcKIiBRofenK+3O22I8IrlOGkak5O4lD0jbuiL2PME+kNZXjjQRlRQgLCTl0nfeoU3N3aDXoFeIqfmHvCTB15hj4I/NPV3aHu75O5Bpy6vAucoVB6tFsyEILyBmLleOUzlG8a6xoKOrEfqWQJVqXd4SOXke12CW9jLysSs11YpOYP5Bk5rZHW6DFksaaDblnFI2pM7pb2plSp/mWgu5OefToDeOkcD13XOudIA4Xr0M0t/iaPS4aU3+v41GPY+4a52SwYHDCotDBR4mvRZxe0oLwS9mE6llCfJhS7/aT6m64BAH9EaBp2Qk53vKjgEpk0OjaFXgGsGENkDWidbe6AqFwgrFHYCEMUlDlTCqOTm9pKmMTmJMk8tfhQ3ohurnrqS8x302vV1flLgE32dXiYKjK59BLona7tr0x4EmJ0EhxIqkyEdLw6jIaISPWkvQRATluHPuh7U4zqtbTRx/eKBwoH5usxPeBkNBaTEczaHT9NlPOHbxXPQrQTCnqRdz7Y9/RQUR+052l6yLCYpXaWIsoTXKeLxgKg6Qbh73Y4sx6Ep3ybPTDfPKK/jnMP1uPEjOmnr2UqbUDN1KivZbkh/rCAqh7S9Nz/8N5MGKsoyWQ/ygzf6Qgz+7YKctqtbdzyi0993UJxb2UqhUKB/C5VKpVDpiJw47HaavdDThQtWLp3CeqAXYW1vijmrnrIXxQ26kD2jt0OpQm9v3pM5xa4Or9y9u3nOmV/3mFDEJVc43Kp3D7seSHtAfykie9gCiJ5icqY9PosAbXB2zEqcKHjQroD3SbSiIQvR80WUm3kyblBC0Y3Z4yufmEkfFf7A9RFEisfZd5vRYyAyxZ5aOY5GJutuEJWg4dAsyHoyK8Mp14FsIFMdyTxc+jhneneQjdlzGpBvRPaw4gYI6voawrybV97idoE4vVMrFmvYKc7GEkgHz28SQmWPPBl+tNRNGPB4ikH+LM1cR90+Sj/WZZbiiduBcA1UMDL5pCPwN7Po8V6Y4ufr1FIkbofIPlLUtOfX/G4owi91lDBu9PQU5EydJeHPPBcJILIHTfTnjmEPDgH2erpjCuT/6kOEvaRpTE5Muy3vCPH4rDM6nuFBqyvSEvA6eSqce8Kh+V5qX3jCn8lC/TDqWICH7guVvG6rAvzgaOWdV0pEKkYjSd5Mn1Lp/obm7ER9St5wq1+L5QyHww4Vzk42StE6Dd6va6i+ZqEd5RjXlCQ3jkDcHnD4CeO1o+jtU3OvMfydiqnVU85D8n7wfqfA2EbXLkD+k/y/l6l/IlAGZweO1F+lC35gDMHT0usoeuuH/FsaR+vKNG45s8JZ1nu0xTn/Oz+kwwCMlaq5B9Rp7h0WeuvdIwwK/N1NGTfoym8dZbvr64Wjnsq3G9mjyvp6NzsvmiAYoudxRq/S6TTMh9z17zGdio5R12X8Pmn0pD7oO1sEyUPO1MUPW+2wrnvNKi/jMScI262GJ2K6RwN1nNxqOCoXwRkt8W6zSpmJPr9KeWXeq3pLxj79WAYUQFXIKsF2ou+nRBe/Y0g0l+l5pFh4iBjPEGfZ5uEVt3rQSO9i+klFwdm4dUo/PNF2Y7EoICuW1+wZ/jwjcSOuGDIjx5X+bKDUISfGeVx75u6p5ywPU3xPTX5fzdijn9ESnLXvcwOOfAxUY2cqgWHCnseG7TFhD/TqadibUqm8zuHfT1UdevEcAcUDdVtW+yL165j6yomKDZ4XLYVM5ohj2hOfLu/hJE1jcjKKMSZpMaON5MSREGfMxjxZu8UnGY+SxuzBi/bEGZb2kqYxOen2muCi0jTpgGyEdOvTjBLislfv0fYcnfY9b89cDJOmMTmpUDq8bOm6+ymcaH/U05NZH2P/n703PfT/AV2lLjYgxXAEAAAAAElFTkSuQmCC",
    "https://leetcode.com/static/images/LeetCode_Sharing.png",
    "https://imageio.forbes.com/specials-images/imageserve/604a6910e339b2db49b701dd/financial-advisor/960x0.jpg?format=jpg&width=960",
    "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  ];
  const links = [
    "https://www.tic.com/handlebars",
    "https://leetcode.com/",
    "https://www.forbes.com/sites/robertfarrington/2022/12/28/how-to-make-your-money-go-farther-in-2023/?sh=136558444814",
    "https://bootcamp.ce.uci.edu/coding/landing-ftpt-b5a/?s=Google-Brand_Tier-1_&dki=Learn%20Coding%20and%20More%20Online&pkw=uci%20coding%20bootcamp&pcrid=454471501593&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CUC-IRVINE%7CSEM%7CCODING%7C-%7COFL%7CTIER-1%7CALL%7CBRD%7CEXACT%7CCore%7CBootcamp&utm_term=uci%20coding%20bootcamp&s=google&k=uci%20coding%20bootcamp&utm_adgroupid=107764976562&utm_locationphysicalms=9031057&utm_matchtype=e&utm_network=g&utm_device=c&utm_content=454471501593&utm_placement=&gclid=CjwKCAjwiOCgBhAgEiwAjv5whO5gJjPNKbHF3XFxHEqewzy8GXUVerP-1BpN_ncE6137jsnKJKVFKBoClokQAvD_BwE&gclsrc=aw.ds",
  ];
  var i = 0;
  useEffect(() => {
    const linkHrefs = document.querySelector("#current-option-text2");
    const currentOptionText1 = document.getElementById("current-option-text1");
    const currentOptionText2 = document.getElementById("current-option-text2");
    const currentOptionImage = document.getElementById("image");
    const carousel = document.getElementById("carousel-wrapper");
    const mainMenu = document.getElementById("menu1");
    const optionPrevious = document.getElementById("previous-option");
    const optionNext = document.getElementById("next-option");
    console.log(currentOptionText1);
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    mainMenu.style.background = color_options[i];

    optionNext.onclick = function () {
      i = i + 1;
      i = i % text1_options.length;
      currentOptionText1.dataset.nextText = text1_options[i];
      linkHrefs.href = links[i];
      currentOptionText2.dataset.nextText = text2_options[i];

      mainMenu.style.background = color_options[i];
      carousel.classList.add("anim-next");

      setTimeout(() => {
        currentOptionImage.style.backgroundImage =
          "url(" + image_options[i] + ")";
      }, 455);

      setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-next");
      }, 650);
    };

    optionPrevious.onclick = function () {
      if (i === 0) {
        i = text1_options.length;
      }
      i = i - 1;
      currentOptionText1.dataset.previousText = text1_options[i];
      linkHrefs.href = links[i];
      currentOptionText2.dataset.previousText = text2_options[i];

      mainMenu.style.background = color_options[i];
      carousel.classList.add("anim-previous");

      setTimeout(() => {
        currentOptionImage.style.backgroundImage =
          "url(" + image_options[i] + ")";
      }, 455);

      setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        carousel.classList.remove("anim-previous");
      }, 650);
    };
  }, []);

  return (
    <div id="carousel-wrapper">
      <div id="menu1" style={{ opacity: 0.8 }}>
        <div id="current-option">
          <span
            id="current-option-text1"
            data-previous-text=""
            data-next-text=""
          ></span>
          <a
            href="https://www.tic.com/handlebars"
            target="_blank"
            id="current-option-text2"
            data-previous-text=""
            data-next-text=""
            rel="noreferrer"
          >
            Visit Google
          </a>
        </div>
        <button id="previous-option"></button>
        <button id="next-option"></button>
      </div>
      a <div id="image"></div>
    </div>
  );
}

export default Carousel;
