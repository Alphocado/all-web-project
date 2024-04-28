/**
 *  ♈ Aries (Ram): March 21–April 19                  done done

    ♉ Taurus (Bull): April 20–May 20                  done done

    ♊ Gemini (Twins): May 21–June 21                  done done

    ♋ Cancer (Crab): June 22–July 22                  done done

    ♌ Leo (Lion): July 23–August 22                   done done

    ♍ Virgo (Virgin): August 23–September 22          done done

    ♎ Libra (Balance): September 23–October 23        done done

    ♏ Scorpius (Scorpion): October 24–November 21     done done

    ♐ Sagittarius (Archer): November 22–December 21   done done

    ♑ Capricornus (Goat): December 22–January 19       done done

    ♒ Aquarius (Water Bearer): January 20–February 18  done done

    ♓ Pisces (Fish): February 19–March 20              done done
 */



function searchZodiac(day, month){
  // 1-31
  if(
    month == 1 || 
    month == 3 || 
    month == 5 || 
    month == 7 || 
    month == 8 || 
    month == 10 || 
    month == 12
  ){

    // January
    if(month == 1){
      if(day >= 1 && day <= 19){
        return "capricon"
      } else if (day > 19 && day <=31){
        return "aquarius"
      }
    }

    // March
    else if (month == 3){
      if(day >= 1 && day <= 20){
        return "pisces";
      } else if (day > 20 && day <= 31){
        return "aries";
      }
    }

    // May 
    else if (month == 5){
      if(day >= 1 && day <= 21){
        return "taurus";
      } else if (day > 21 && day <= 31){
        return "gemini";
      }
    }

    // July
    else if (month == 7){
      if(day >= 1 && day <= 22){
        return "cancer";
      } else if (day > 22 && day <= 31){
        return "leo";
      }
    }

    // agustus
    else if (month == 8){
      if(day >= 1 && day <= 22){
        return "leo";
      }
      else if (day > 22 && day <= 31){
        return "virgo";
      }
    }

    // oktober 
    else if(month == 10){
      if(day >= 1 && day <= 23){
        return "libra";
      }
      else if ( day > 23 && day <= 31){
        return "scorpio";
      }
    }
    
    // desember
    else if (month == 12){
      if(day >= 1 && day <= 21){
        return "sagittarius";
      } else if ( day > 21 && day <= 31){
        return "capricon"
      }
    }
  }



  // 1 - 30
  else if(
    month == 4 ||
    month == 6 ||
    month == 9 ||
    month == 11
  ){

    // April
    if(month == 4){
      if(day >= 1 && day <= 19){
        return "aries";
      } else if (day > 19 && day <= 30){
        return "taurus";
      }
    }

    // June
    else if(month == 6){
      if(day >= 1 && day <= 21){
        return "gemini";
      } else if ( day > 21 && day <= 30){
        return "cancer";
      }
    }

    // september 
    else if(month == 9){
      if(day >= 1 && day <= 22){
        return "virgo";
      } else if (day > 22 && day <= 30){
        return "libra";
      }
    }

    // november 
    else if(month == 12){
      if(day >= 1 && day <= 21){
        return "scorpio";
      } else if(day > 21 && day <= 30){
        return "sagittarius"
      }
    }

  }





  // 2 - Febuari
  else if (month == 2){
    if(day >= 1 && day <= 18){
      return "aquarius";
    } else if (day > 18 && day <= 29){
      return "pisces";
    }
  }
}

function performSearch() {
  let image = document.getElementById("result");
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;

  // update check null
  if(!day || !month){
    alert("Please entry correctly");
  } else {
    console.log("Day: " + day);
    console.log("Month: " + month);
  }

  let zodiac = searchZodiac(day, month);
  console.log("Zodiac: " + zodiac);
  image.src = "img/"+ zodiac + ".png";
}