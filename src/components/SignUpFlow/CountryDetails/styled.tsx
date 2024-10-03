
import styled from 'styled-components';

export const Step1Wrapper = styled.div`
    background: #f3f4f5;
    height: 100vh;
    .MuiContainer-root{
        max-width: 1310px;
        height: 100%;
        overflow: auto;
    }
`;

export const Step1Panel = styled.div`
    background: #fff;
    box-shadow: 0 1px 10px #ddd;
    border-radius: 10px;
    padding: 32px;
    margin: 30px 0;
    @media(max-width: 767px){
        padding: 10px;
    }
    img.logoImg{
        display: block;
        padding: 0 20px;
        height: auto;
        margin: auto;
        max-height: 300px;
        @media(max-width: 599px){
            height: 215px;
            padding: 0;
        }
    }
    .selectMess{
        border: 1px solid #939393;
        border-radius: 4px;
        padding: 2px;
        .MuiGrid-item {
            background-color: #F1F7EA;
            border-bottom: 2px solid #fff;
            p{
                color: #686868;
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
    .MuiInputBase-root{
        height: 48px;
        color: #848484;
        font-weight: 600;
        .MuiOutlinedInput-notchedOutline{
            border-color: #1976d2 !important;
        }
    }
    button.btnNext{
        background-color: #1976d2;
        border-radius: 4px;
        padding: 0 8px;
        margin-left: 20px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media(max-width: 599px){
            margin: 20px auto 0 auto;
        }
        svg{
            color: #fff;
            font-size: 34px;
        }
    }
    button.Mui-disabled{
        background-color: #e1e1e1;
    }
`;
