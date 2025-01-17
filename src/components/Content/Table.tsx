"use client";
import React, { useState } from "react";
import Image from "next/image";

const ExcelLikeTable = () => {
  const [tableData, setTableData] = useState([
    [
      // Header row
      ["", ""],
      ["", ""],
      ["/images/input.png", "Input Column"],
      ["/images/action.png", "Action column"],
      ["/images/enrich.png", "Enrich Company"],
      ["/images/plus.png", "Add Column"],
    ],
    [
      "1",
      "play",
      "Oct 12, 2024 at 14:08 PM",
      ["", "Bitscale Evaluation - Account Rele..", ""],
      ["/images/logo-1.png", "Bitscale Evaluation - Account Rele."],
    ],
    [
      "2",
      "play",
      "Oct 12, 2024 at 14:08 PM",
      [
        "/images/Icon.png",
        "Cell data size exceeds limit",
        "italic text-gray-400",
      ],
      ["/images/logo-2.png", "Bmw Evaluation - Relevancy Rele.", ""],
    ],
    [
      "3",
      "play",
      "Oct 12, 2024 at 14:08 PM",
      [
        "/images/link-external-02.png",
        "https://www.linkedin.com/in/shiva5152/",
        "underline text-blue-500",
      ],
      ["/images/logo-3.png", "Google Evaluation - Relevancy Rele.", ""],
    ],
    [
      "4",
      "play",
      "Oct 12, 2024 at 14:08 PM",
      [
        "/images/loading-01.png",
        "Loading data, please wait",
        "italic text-gray-400",
      ],
      ["/images/logo-4.png", "Apple Evaluation - Relevancy Rele.", ""],
    ],
    [
      "5",
      "play",
      "Oct 12, 2024 at 14:08 PM",
      [
        "/images/loading-01.png",
        "Loading data, please wait",
        "italic text-gray-400",
      ],
      ["/images/logo-5.png", "Figma Evaluation - Relevancy Rele.", ""],
    ],
    ["", "", "+ Add Row", ["", "", ""], ["", "", ""]],
  ]);

  const addColumn = (type: string) => {
    if (type != "Add Column") return;
    const updatedData = tableData.map((row, rowIndex) => {
      if (rowIndex === 0) {
        return [...row, [``, `Column ${row.length + 1}`]];
      } else {
        return [...row, ""];
      }
    });

    setTableData(updatedData);
  };

  const addRow = (type: string) => {
    if (type != "+ Add Row") return;
    const lastRow = tableData[tableData.length - 1];
    const newRow = tableData[0].map(() => "");
    setTableData([...tableData.slice(0, -1), newRow, lastRow]);
  };

  const handleCellChange = (rowIndex: any, colIndex: any, value: any) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex] = value;
    setTableData(updatedData);
  };

  return (
    <div className="h-full flex flex-col items-center bg-gray-100 p-0">
      <div className="overflow-x-auto w-full bg-white shadow-md">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {tableData[0].map((header, colIndex) => (
                <th
                  key={colIndex}
                  className="px-4 py-2 border text-left font-medium text-gray-700"
                  contentEditable
                  suppressContentEditableWarning
                >
                  {header[0] ? (
                    <div
                      onClick={() => addColumn(header[1])}
                      className={`flex items-center gap-1 ${
                        header[1] == "Add Column" ? "cursor-pointer" : ""
                      }`}
                    >
                      <Image
                        height={15}
                        width={15}
                        alt="user avatar"
                        src={header[0]}
                      />
                      <p>{header[1]}</p>
                    </div>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-2 border text-sm text-gray-700 h-4`}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCellChange(
                        rowIndex + 1,
                        colIndex,
                        e.target.innerText
                      )
                    }
                  >
                    {typeof cell == "string" && cell == "play" ? (
                      <div className="flex justify-center items-center">
                        <Image
                          height={20}
                          width={20}
                          alt="user avatar"
                          src={"/images/play_circle.png"}
                        />
                      </div>
                    ) : typeof cell == "object" ? (
                      typeof cell == "object" && (
                        <div className="flex items-center gap-1">
                          {cell[0] && (
                            <div>
                              <Image
                                height={15}
                                width={15}
                                alt="..."
                                src={cell[0]}
                              />
                            </div>
                          )}
                          <p className={cell[2]}>{cell[1]}</p>
                        </div>
                      )
                    ) : (
                      <div
                        className={` ${
                          cell == "+ Add Row" ? "cursor-pointer" : ""
                        }`}
                        onClick={() => addRow(cell)}
                      >
                        {cell}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExcelLikeTable;
