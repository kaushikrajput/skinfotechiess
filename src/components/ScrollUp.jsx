import React, { useEffect, useState } from "react";
import styled from "styled-components";


const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <Wrapper >
            {isVisible && (
                <div className="top-btn" onClick={goToBtn} style={{ backgroundImage: `url(./imgs/icons/up-arrow.svg)` }}></div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  .top-btn {
    font-size: 20px;
    width: 30px;
    height: 50px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 100px;
    position: fixed;
    bottom: 20px;
    opacity:.4;
    right: 20px;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-size: 15px;
    background-position: center center;
    background-repeat: no-repeat;
    transition: 1.2s cubic-bezier(.17, .85, .438, .99);
  }
  .top-btn:hover{
    opacity:1;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      left: 91%;
    }
  }
`;

export default ScrollUp;