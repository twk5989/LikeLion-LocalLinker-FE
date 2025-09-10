import styled from '@emotion/styled';

export const Stage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 70px 20px 0 20px;
  background: #f4f6f4;
  display: flex;
  justify-content: center;
`;

export const Page = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #f4f6f4;
  position: relative;
  overflow-x: hidden;
`;

export const Desc = styled.p`
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0;
  color: #616462;
  margin: 0;
`;

export const Content = styled.main`
  flex: 1 1 auto;
  display: block;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 161px;
`;

export const Box = styled.div`
  width: 100%;
  height: 68px;
  border-radius: 4px;
  border: 1px solid var(--surface-container4, #e9ece9);
  background: #fbfcfb;
  opacity: 1;
  padding: 14px 18px;
  box-sizing: border-box;
  margin-bottom: 18px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0px;
  border: 0.8px solid #e2e6e2;
  opacity: 1;
  margin: 16px 0;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 120px;
  margin: 0 0 40px 0;
`;
