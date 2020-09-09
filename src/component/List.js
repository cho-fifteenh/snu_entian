import React, { Component } from "react";
import Button from "../component/Button";

//내용들 객체 형태로 배열에 넣기.
const ListContent = [
  {
    title: "TOTAL",
    id: 0,
    percent: 27,
  },
  {
    title: "Otology",
    id: 1,
    percent: 56,
  },
  {
    title: "Rhinology",
    id: 2,
    percent: 78,
  },
  {
    title: "Head & Neck",
    id: 3,
    percent: 50,
  },
];

//listbox
function ListBox({ title, percent }) {
  return (
    <div className="list_box">
      <div className="list_flex_box">
        <div className="list_box_l">
          <p className="list_box_title">{title}</p>
          <p className="percent">{percent}%</p>
        </div>
        <Button />
      </div>
      <p className="gray_bar">
        <span className="blue_bar" style={{ width: percent + "%" }}></span>
      </p>
    </div>
  );
}

class List extends Component {
  render() {
    return (
      <div>
        {ListContent.map((
          //map으로 여러개 만들기
          list
        ) => (
          <ListBox title={list.title} percent={list.percent} key={list.id} />
        ))}
      </div>
    );
  }
}

export default List;
