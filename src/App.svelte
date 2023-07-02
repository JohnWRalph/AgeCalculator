<script lang="ts">
  import { years, months, days } from "./store/age";

  var birthDay;
  var birthMonth;
  var birthYear;

  function calculate(birthYear: number, birthMonth: number, birthDay: number) {
    //create date object with no time
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    // const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let year;
    let month;
    let day;
    // const daysInMonth = new Date(birthYear, birthMonth, 0).getDate();
    // console.log(daysInMonth);
    if (
      birthYear === undefined ||
      birthMonth === undefined ||
      birthDay === undefined
    ) {
      alert("Please enter a valid date");
      return;
    }
    if (birthYear > today.getFullYear()) {
      alert("Please enter a valid date");
      return;
    }
    //if birth year the same as current year and month is greater than current 
    // month or equal to current month and day is greater than current day
    if (
      birthYear === todayYear &&
      (birthMonth > todayMonth || birthMonth === todayMonth) &&
      birthDay > todayDay
    ) {
      alert("Please enter a valid date");
      return;
    }
    //if birth year the same as current year and month is greater than current
    //month
    if (
      birthYear === todayYear &&
      birthMonth > todayMonth +1
      
    ) {
      alert("Please enter a valid date");
      return;
    }
    if (birthMonth > 12 || birthMonth < 1) {
      alert("Please enter a valid date");
      return;
    }
    if (birthDay > 31 || birthDay < 1) {
      alert("Please enter a valid date");
      return;
    }
    if (
      birthMonth === 1 ||
      birthMonth === 3 ||
      birthMonth === 5 ||
      birthMonth === 7 ||
      birthMonth === 8 ||
      birthMonth === 10 ||
      birthMonth === 12
    ) {
      if (birthDay > 31) {
        alert("Please enter a valid date");
        return;
      }
    }
    if (
      birthMonth === 4 ||
      birthMonth === 6 ||
      birthMonth === 9 ||
      birthMonth === 11
    ) {
      if (birthDay > 30) {
        alert("Please enter a valid date");
        return;
      }
    }
    if (birthMonth === 2) {
      if (birthDay > 28) {
        alert("Please enter a valid date");
        return;
      }
    }

    //calender

    //get birthdate
    var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    var birthDateYear = birthDate.getFullYear();
    var birthDateMonth = birthDate.getMonth();
    var birthDateDay = birthDate.getDate();

    console.log(birthDateYear);
    console.log(birthDateMonth);
    console.log(birthDateDay);

    console.log(todayYear);
    console.log(todayMonth);
    console.log(todayDay);

    //get difference in year
    let yearDifference = todayYear - birthDateYear;
    console.log(yearDifference);
    years.set(yearDifference);

    //get difference in months
    let monthDifference = todayMonth - birthDateMonth;
    console.log(monthDifference);
    months.set(monthDifference);

    //if months is positive we will work forward to get days

    if (monthDifference > 0) {
      //get difference in days
      let dayDifference = todayDay - birthDateDay;
      console.log(dayDifference);

      //if days is positive we will work forward to get days
      if (dayDifference > 0) {
        days.set(dayDifference);
      } else if (dayDifference < 0) {
        //remove one month and add next months days
        monthDifference--;
        console.log(monthDifference);
        months.set(monthDifference);
        //get days in previous month
        let daysInPreviousMonth = new Date(
          birthDateYear,
          birthDateMonth + 2,
          0
        ).getDate();
        console.log(daysInPreviousMonth);
        //add days in previous month to dayDifference
        dayDifference = daysInPreviousMonth + dayDifference;
        console.log(dayDifference);
        days.set(dayDifference);
      } else {
        //get difference in days
        let dayDifference = todayDay - birthDateDay;
        console.log(dayDifference);
        days.set(dayDifference);
      }

      //if months is negative we will work backwards to get days
    } else if (monthDifference < 0) {
      //remove one year and add cycle through months
      yearDifference--;
      console.log(yearDifference);
      years.set(yearDifference);
      //add 12 months to monthDifference
      monthDifference = 12 + monthDifference;
      console.log(monthDifference);
      months.set(monthDifference);

      //get difference in days
      let dayDifference = todayDay - birthDateDay;
      console.log(dayDifference);

      //if days difference is positive we will work forward to get days
      if (dayDifference > 0) {
        days.set(dayDifference);
      } else if (dayDifference < 0) {
        //remove one month and add next months days
        monthDifference--;
        console.log(monthDifference);
        months.set(monthDifference);
        //get days in previous month
        let daysInPreviousMonth = new Date(
          birthDateYear,
          birthDateMonth + 2,
          0
        ).getDate();
        console.log(daysInPreviousMonth);
        //add days in previous month to dayDifference
        dayDifference = daysInPreviousMonth + dayDifference;
        console.log(dayDifference);
        days.set(dayDifference);
      } else {
        //get difference in days
        let dayDifference = todayDay - birthDateDay;
        console.log(dayDifference);
        days.set(dayDifference);
      }
    } else {
      //if months are the same get day difference
      let dayDifference = todayDay - birthDateDay;
      console.log(dayDifference);

      //if days difference is positive we will work forward to get days
      if (dayDifference > 0) {
        days.set(dayDifference);
      } else if (dayDifference < 0) {
        //remove one year and add cycle through months
        yearDifference--;
        console.log(yearDifference);
        years.set(yearDifference);
        //add 12 months to monthDifference
        monthDifference = 11 + monthDifference;
        console.log(monthDifference);
        months.set(monthDifference);
        //get days in previous month
        let daysInPreviousMonth = new Date(
          birthDateYear,
          birthDateMonth + 2,
          0
        ).getDate();
        console.log(daysInPreviousMonth);
        //add days in previous month to dayDifference
        dayDifference = daysInPreviousMonth + dayDifference;
        console.log(dayDifference);
        days.set(dayDifference);
      } else {
        //get difference in days
        let dayDifference = todayDay - birthDateDay;
        console.log(dayDifference);
        days.set(dayDifference);
      }

        
    }

    // //get difference in days
    // let daysDifference = Math.floor(
    //   (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
    // );
    // console.log(daysDifference);

    // //get age in years, months and days
    // let yearValue = Math.floor(daysDifference / 365);
    // console.log(yearValue)

    // let monthValue = Math.floor((daysDifference % 365) / 30);
    // let dayValue = Math.floor((daysDifference % 365) % 30);

    // years.set(yearValue);
    // months.set(monthValue);
    // days.set(dayValue);

    // while (daysDifference !== 0) {
    //   if (daysDifference === 0) {
    //     console.log("same date");
    //   } else if (daysDifference > 0) {
    //     console.log("before date");
    //     if (birthDay < daysInMonth[birthMonth - 1]) {
    //       birthDay++;

    //     } else if (birthMonth < 12) {
    //       birthDay = 1;
    //       birthMonth++;

    //     } else {
    //       birthDay = 1;
    //       birthMonth = 1;
    //       birthYear++;

    //     }

    //     //convert days difference to age

    //     birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    //     daysDifference = Math.floor(
    //       (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
    //     );
    //     if (daysDifference === 0) {
    //       console.log("same date");
    //     }
    //   } else {
    //     console.log("after date");
    //   }
    // }
  }
</script>

<main>
  <div class="card">
    <div id="top">
      <div class="form-control w-full max-w-xs">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">Day</span>
        </label>
        <input
          bind:value={birthDay}
          type="number"
          placeholder="DD"
          class="input input-primary w-full max-w-xs"
        />
      </div>
      <div class="form-control w-full max-w-xs">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">Month</span>
        </label>
        <input
          bind:value={birthMonth}
          type="number"
          placeholder="MM"
          class="input input-primary"
        />
      </div>
      <div class="form-control w-full max-w-xs">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
          <span class="label-text">Year</span>
        </label>
        <input
          bind:value={birthYear}
          type="number"
          placeholder="YYYY"
          class="input input-primary w-full max-w-xs"
        />
      </div>
    </div>

    <div class="divider" />
    <button
      on:click={() => calculate(birthYear, birthMonth, birthDay)}
      class="round-button btn btn-round"
    >
      <img src="src/assets/images/icon-arrow.svg" alt="arrow" />
    </button>

    <div id="bottom">
      <div id="bottomText">
        {#if $years}
          <div class="bold-italic-text" id="bottomTextNumber">{$years}</div>
        {:else if $years === 0}
          <div class="bold-italic-text" id="bottomTextNumber">0</div>
        {:else}
          <div class="bold-italic-text" id="bottomTextNumber">--</div>
        {/if}
        <div class="bold-italic-text" id="bottomTextword">years</div>
      </div>
      <div id="bottomText">
        {#if $months}
          <div class="bold-italic-text" id="bottomTextNumber">{$months}</div>
        {:else if $months === 0}
          <div class="bold-italic-text" id="bottomTextNumber">0</div>
        {:else}
          <div class="bold-italic-text" id="bottomTextNumber">--</div>
        {/if}
        <div class="bold-italic-text" id="bottomTextword">months</div>
      </div>
      <div id="bottomText">
        {#if $days}
          <div class="bold-italic-text" id="bottomTextNumber">{$days}</div>
        {:else if $days === 0}
          <div class="bold-italic-text" id="bottomTextNumber">0</div>
        {:else}
          <div class="bold-italic-text" id="bottomTextNumber">--</div>
        {/if}
        <div class="bold-italic-text" id="bottomTextword">days</div>
      </div>
    </div>
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .card {
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 560px;

    margin: 1rem;
    position: relative;
    width: 770px;
    border-radius: 25px;
    border-bottom-right-radius: 150px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  #top {
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* position: relative; */
    justify-content: left;
    /* left: 50px; */
    font-weight: 400;
  }
  @font-face {
    font-family: "Poppins";
    src: url("src/assets/fonts/Poppins-BoldItalic.ttf") format("truetype");
    /* If using CDN:
  src: url('https://link-to-cdn/font-file.ttf') format('truetype'); */
  }

  @font-face {
    font-family: "Poppins";
    src: url("src/assets/fonts/Poppins-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    src: url("src/assets/fonts/Poppins-Bold.ttf") format("truetype");
    font-weight: bold;
  }

  @font-face {
    font-family: "Poppins";
    src: url("src/assets/fonts/Poppins-Italic.ttf") format("truetype");
    font-style: italic;
  }

  @font-face {
    font-family: "Poppins";
    src: url("src/assets/fonts/Poppins-BoldItalic.ttf") format("truetype");
    font-weight: bold;
    font-style: italic;
  }

  body {
    font-family: "Poppins", sans-serif;
  }

  .normal-text {
    font-weight: normal;
    font-style: normal;
  }

  .bold-text {
    font-weight: bold;
    font-style: normal;
  }

  .italic-text {
    font-style: italic;
  }

  .bold-italic-text {
    font-weight: bold;
    font-style: italic;
  }

  #bottom {
    height: 150px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    /* left: 50px; */
    /* top:100px; */
    text-align: left;
    font-size: 84px;
    justify-content: space-evenly;
    font-weight: 800;
    font-family: Poppins, sans-serif;
  }
  #bottomText {
    display: flex;
    flex-direction: row;
  }
  #bottomTextNumber {
    color: hsl(259, 100%, 65%);
  }
  #divider {
    border: 1px solid #e2e1e1;
    width: 600px;
  }
  .input {
    width: 150px;
    font-size: 32px;
    font-weight: 700;
  }

  .label-text {
    letter-spacing: 0.5em;
  }

  .divider {
    /* position: absolute; */
  }

  #arrowImage {
    position: absolute;
    top: 140px;
    right: 50px;
    /* transform: translate(-50%, -50%); */
    background-color: black;
    width: 75px;
    height: 75px;
  }
  .round-button {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: hsl(259, 100%, 65%);
    color: white;
    text-align: center;
    font-size: 16px;
    line-height: 100px;
    position: absolute;
    top: 125px;
    right: 50px;
    z-index: 10;
  }

  .divider {
    width: 90%;
  }
</style>
