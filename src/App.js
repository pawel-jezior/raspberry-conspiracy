import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { User } from "./components/User/User";
import { Medal } from "./components/Medal/Medal";
import { ErrorHandler } from "./components/ErrorHandler/Errorhandler";
import { Thanks } from "./components/ErrorHandler/Thanks";

const DATABASE =
  "https://raspberry-conspiracy-database-default-rtdb.firebaseio.com/";
const USERS = "users";
const SUFFIX = ".json";

function App() {
  const [usersData, setUsersData] = useState();

  const getUsersData = async () => {
    await fetch(DATABASE + USERS + SUFFIX)
      .then((response) => response.json())
      .then((response) => {
        setUsersData(response);
      })
      .catch((error) => {
        console.log("The content of the USERS cannot be downloaded.", error);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const getCurrentWeekPawel = () => {
    if (usersData && usersData.Pawel.currentWeek) {
      return usersData.Pawel.currentWeek;
    } else {
      return 0;
    }
  };

  const getCurrentWeekBasia = () => {
    if (usersData && usersData.Basia.currentWeek) {
      return usersData.Basia.currentWeek;
    } else {
      return 0;
    }
  };

  const getLastWeekPawel = () => {
    if (usersData && usersData.Pawel.lastWeek) {
      return usersData.Pawel.lastWeek;
    } else {
      return 0;
    }
  };

  const getLastWeekBasia = () => {
    if (usersData && usersData.Basia.lastWeek) {
      return usersData.Basia.lastWeek;
    } else {
      return 0;
    }
  };

  const getPointsPawel = () => {
    return getCurrentWeekPawel() - getLastWeekPawel();
  };

  const getPointsBasia = () => {
    return getCurrentWeekBasia() - getLastWeekBasia();
  };

  return (
    <div className="App">
      <header className="App-header">
      <Thanks />
        {/* {getPointsPawel() < 0 || getPointsBasia() < 0 ? (
          <ErrorHandler />
        ) : (
          <>
            <Header />
            <div className="users">
              <User name={"Paweł"} points={getPointsPawel()} />
              <User name={"Basia"} points={getPointsBasia()} />
            </div>
            <ProgressBar
              pointsP={getPointsPawel()}
              pointsB={getPointsBasia()}
            />
            <Medal pointsP={getPointsPawel()} pointsB={getPointsBasia()} />
          </>
        )} */}
      </header>
    </div>
  );
}

export default App;

// npm start
