import { useState } from "react";
import Button from "../components/button";
type ProfileType = {
  name: string;
  lastname: string;
  age: number;
  gender: boolean;
  profilePicture?: string;
};

type BookType = {
  title: string;
  author: string;
  pages: string;
  hardCover: boolean;
};
const DataTypes = () => {
  const defaultProfileValues: ProfileType = {
    name: "Gabrijel",
    lastname: "Kanjo",
    age: 22,
    gender: true,
    profilePicture: "https://source.unsplash.com/random/?man",
  };

  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>(["Gabrijel", "Stefan"]);
  const [homeNumber, setHomeNumber] = useState<number>(0);
  const [grades, setGrades] = useState<number[]>([2, 5, 2, 1, 1, 3, 1, 3, 1]);
  const [profile, setProfile] = useState<ProfileType>(defaultProfileValues);
  const [books, setBooks] = useState<BookType[]>([]);
  const [wc, setWc] = useState<boolean>(false);
  const changeGender = () => {
    const newState: ProfileType = {
      ...profile,
      gender: !profile.gender,
    };
    setProfile(newState);
  };

  const addBook = () => {
    const newState: BookType[] = [
      { title: "Petar Pan", author: "Nez", hardCover: false, pages: "puno" },
    ];
    setBooks(newState);
  };

  return (
    <>
      <h1> String</h1>
      <div>{name ? name : "trenutno ime ne postoji, molimo dodajte ime"}</div>
      <Button
        onClick={() => {
          setName("Gabi");
        }}
      >
        Change Name
      </Button>
      <hr />
      <h1>Array strings</h1>
      <div>
        {names.length > 0
          ? names.map((name, index) => {
              return <div key={index}>{name}</div>;
            })
          : " Nema nista u ovom nizu, dodaj te bar jedno ime kako bi ga vidjeli"}
      </div>
      <Button
        onClick={() => {
          setNames([...names, "Igor", "Nikola", "Janika"]);
        }}
      >
        Change Names
      </Button>
      <hr />
      <h1>Number</h1>
      <div>{homeNumber > 0 ? homeNumber : "Nije unesen tocan kucni broj"}</div>
      <Button
        onClick={() => {
          setHomeNumber(21);
        }}
      >
        Change Home Number
      </Button>
      <hr />
      <h1>Array Number</h1>
      {grades.length > 0
        ? grades.map((grade, index) => {
            return <div key={index}>{grade > 0 && grade < 6 ? grade : ""}</div>;
          })
        : "Nema ocjena"}
      <Button
        onClick={() => {
          let newState: number[] = [];
          grades.forEach((grade) => {
            if (grade > 1) {
              newState.push(grade);
            }
          });
          setGrades(newState);
        }}
      >
        Obriši sve jedinice
      </Button>
      <hr />
      <h1>Object</h1>
      {profile.profilePicture ? (
        <img width={30} src={profile.profilePicture} alt="profile Pic" />
      ) : (
        "Nema slike"
      )}
      <div>
        {profile.name},{profile.lastname},{profile.age}
      </div>
      <div>{profile.gender ? "man" : "female"}</div>
      <Button
        onClick={() => {
          changeGender();
        }}
      >
        Change Gender
      </Button>
      <hr />
      <h1>Arej objekata</h1>
      <div>
        {books.length > 0
          ? books.map((book) => {
              return (
                <div key={book.title}>
                  {book.title}, {book.author}
                  <div>Broj stranica: {book.pages}</div>
                  <div>{book.hardCover ? "da" : "ne"}</div>
                </div>
              );
            })
          : "Trenutno ne postoji niti jedna knjiga za prikaz"}
      </div>
      <Button onClick={addBook}>Dodaj knjigu</Button>
      <h1>Boolean</h1>
      <div>{wc ? "ima ga" : "nema ga"}</div>
      <Button
        onClick={() => {
          setWc(!wc);
        }}
      >
        Call Toi Toi
      </Button>
    </>
  );
};
export default DataTypes;
