import { useState } from "react";
import styled from "@emotion/styled";

const Container  = styled.div`
    display: flex;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Card  = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 12px;
  padding: 5px 10px;
  flex-direction: column;
  border: 5px solid #545252;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const CardTitle = styled.h2`
    font-size: 1.2rem;
  font-weight: 700;
`;

const CardItem = styled.div`
  width: 100%;
  border: 2px solid lightpink;
  padding: 0 10px;
  border-radius: 6px;
  cursor: grab;
  background: #fcfcf9;
`;

const DragAndDrop = () => {
    const [boards, setBoards] = useState([
        {id: 1, title: "task", items: [{id: 2, title: "go to a shop"}, {id: 3, title: "take out the trash"}, {id: 4, title: "make dinner"},]},
        {id: 5, title: "check", items: [{id: 6, title: "mail"}, {id: 7, title: "vacations"}, {id: 8, title: "news"},]},
        {id: 9, title: "do it", items: [{id: 10, title: "reply to mail"}, {id: 11, title: "develop a web application"}, {id: 12, title: "slip"},]},
    ]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const dragOverHandler = (e) => {
        e.preventDefault()
        if (e.target.div === CardItem) {
            e.target.style.boxShadow = '0 4px 3px grey'
        }
    };
    const dragLeaveHandler = (e) => {
        e.target.style.boxShadow = '0 4px 3px grey'
    };
    const dragStartHandler = (e, board, item) => {
        setCurrentBoard(board);
        setCurrentItem(item)
    };
    const dragEndHandler = (e) => {
        e.target.style.boxShadow = 'none'
    };

    const dropHandler = (e, board, item) => {
        e.preventDefault();
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, currentItem);
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    };

    const dropCardHandler = (e, board) => {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    };

    return (
        <Container>
            {boards.map((board) => (
                <Card key={board.id}
                      onDragOver={(e) => dragOverHandler(e)}
                      onDrop={(e) => dropCardHandler(e, board)}
                >
                    <CardTitle>{board.title}</CardTitle>
                    {board.items.map((item) => (
                        <CardItem key={item.id}
                              onDragOver={(e) => dragOverHandler(e)}
                              onDragLeave={(e) => dragLeaveHandler(e)}
                              onDragStart={(e) => dragStartHandler(e, board, item)}
                              onDragEnd={(e) => dragEndHandler(e)}
                              onDrop={(e) => dropHandler(e, board, item)}
                              draggable={true}
                        >
                            <CardTitle >{item.title} </CardTitle>
                        </CardItem>
                    ))}
                </Card>
            ))}
        </Container>
    );
};

export default DragAndDrop;