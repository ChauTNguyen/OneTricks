let component = ReasonReact.statelessComponent("FilterBtn");

let make = (~onClick, ~active, children) => {
  ...component,
  render: _self => {
    let cond = List.mem(String.lowercase(children), Array.to_list(active));
    let activeCN: string = if (cond) {" filter-btn-active"} else {""};
    let className: string = "filter-rg-btn" ++ activeCN;
    <button className onClick> (ReactUtils.ste(children)) </button>;
  },
};
