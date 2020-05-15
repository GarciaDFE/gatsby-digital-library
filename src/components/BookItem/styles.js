import styled from "styled-components";
import { Link } from 'gatsby'

// import media from "../../styles/breakPoints"

const WrapItem = styled.div`
   width: 100%;
   height: auto;
   margin: 10px 0;
   padding: 15px;
   border-radius: 5px;
   box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
   background-color: ${props => props.theme.color.secondyClear};
`

const Title = styled.h2`
   display: inline-block;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumBig};
   font-weight: bold;
   color: ${props => props.theme.color.firstDark};
   margin: 0 0 10px;
`

const Author = styled(Title)`
   font-size: ${props => props.theme.size.medium};
   font-weight: normal;
   font-style: italic;
   color: ${props => props.theme.color.secondyMedium};
   margin-left: 15px;
`

const Content = styled.div`
   width: 100%;
   height: 225px;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
`

const BookCover = styled.div`
   width: 150px;
   height: 100%;
`

const BookDescription = styled.div`
   flex-shrink: 30;
   width: 100%;
   height: 100%;
   display: inline-flex;
   flex-direction: column;
   justify-content: space-between;
   padding-left: 10px;
`

const Summary = styled.p`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: normal;
   color: ${props => props.theme.color.secondyDark};
   margin: 0;
`

const Linkpage = styled(Link)`
   align-self: flex-end;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.small};
   font-weight: normal;
   background-color: ${props => props.theme.color.firstDark};
   color: ${props => props.theme.color.secondyClear};
   border-radius: 5px;
   opacity: 0.7;
   transition: opacity 300ms linear;
   text-decoration: none;
   padding: 10px 20px;
   :hover {
      opacity: 1;
      transition: opacity 300ms linear;
   }
`

export {
   WrapItem,
   Title,
   Author,
   Content,
   BookCover,
   BookDescription,
   Summary,
   Linkpage
}
