export const Generate = () => {
  return (
    <>
      <input
        type="number"
        id="minBalance"
        name="minBalance"
        placeholder="Enter minimum balance..."
      ></input>
      <button className="button">Generate Zk Report</button>
    </>
  );
};
