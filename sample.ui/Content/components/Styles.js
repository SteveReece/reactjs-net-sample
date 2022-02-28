import styled from 'styled-components'

export const PageStyle = styled.div`
  background-image: url('https://stevesdevbox.azureedge.net/background-m.jpg');
  background-repeat:repeat-y;
  background-size: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    background-image: url('https://stevesdevbox.azureedge.net/background.jpg');
  }
`

export const OverlayStyle = styled.div`
  background-color: rgba(63,83,133,0.85);
  background-size: 100%;
  min-height: 100vh;
`

export const HeaderStyle = styled.header`
  a.navbar-brand {
    white-space: normal;
    text-align: center;
    word-break: break-all;
  }

  .box-shadow {
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
  }

  .nav-brand {
    font-family: 'Ubuntu', sans-serif;
    font-size: 3.5em;
    color: #ccc !important;
  }

  header a {
    color: #ccc;
  }

  .nav-link {
    color: #ccc !important;
  }

`

export const ListStyle = styled.div`
  .landing-menu-item {
    font-size: 2em;
    color: white;
    background-color: rgba(0,0,0,0.25);
    margin-bottom: 1.5em;
  }

  .landing-menu-item a {
    font-size: 2.5em;
    font-weight: bold;
    text-decoration: none;
    color: #ccc !important;
  }

  .landing-menu-item h4 {
    padding-top: 0.2em;
    font-family: 'Ubuntu', sans-serif;
  }

  .landing-menu-button {
    text-align: right;
    padding-top: 0.5em;
  }

  .landing-menu-button button {
    background-color: rgba(255,255,255,0.15);
    font-weight: bold;
    color: #ccc !important;
    font-size: 1.5em;
  }

  @media (min-width: 768px) {
    .landing-menu-item {
      font-size: 1em;
    }

    .landing-menu-item a {
      font-size: 1em;
    }

    .landing-menu-button button {
      font-size: 1em;
    }
  }
`

export const LoadingStyle = styled.div`
  font-size: 2em;
  color: #ccc;
`

export const BlogContainerStyle = styled.div`
  width: 100%
`

export const BlogDisplayStyle = styled.div`
  background-color: rgba(255,255,255,0.8);

  pre {
    margin-bottom: 0rem;
    background-color: black;
    color: white;
  }

  p {
    background-color: rgba(0,0,0,0) !important;
    font-size: 1.75em !important;
  }

  span {
    background-color: rgba(0,0,0,0) !important;
    font-size: 1.75em !important;
  }

  h1 {
    font-size: 4em !important;
  }


  @media (min-width: 768px) {
    h1 {
      font-size: 2.75em !important;
    }

    p {
      font-size: 1.1em !important;
    }

    span {
      font-size: 1.1em !important;
    }
  }
`
