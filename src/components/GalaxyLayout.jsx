import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import constellations from "../constelation-data";
import styled from "styled-components";
import { MobileMenuContext } from "../contexts/mobileMenuContext";


const GalaxyLayoutWrapper = styled.div`
  background-color: #000;
`

const FormAndLinkWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #000;
  font-size: 1rem;
  margin: 0 3px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: .5em .5em;

  & > *:first-child {
    text-align: center;
    background-color: transparent;
    font-size: 1rem;
    padding: .3em 0;
    margin-bottom: .5em;
    color: #fff;
    border: none;
  }

  & > *:last-child {
    padding: .3em 0;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: .5em;
  }
`

const Option = styled.option`
  background: black;
`

const Nav = styled.nav`
  display: flex;
  background-color: #000;
`

const ActiveNavLink = styled(NavLink)`
  padding: 0;
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #f7f5fb;
  padding: .4em 0;
  margin: 0;
  border-bottom: 1px solid #fff;


  &.active {
    border: 1px solid #fff;
    border-bottom: none;
  }
`

export default function GalaxyLayout() {
  const { state, dispatch } = useContext(MobileMenuContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const constellation = event.target.value;
    const serializeFormQuery = (data) => {
      return {
        constellation: data,
      }
    }
    const params = serializeFormQuery(constellation);
    setSearchParams(params);
  }

  useEffect(() => {
    if (searchParams.get("constellation") === null) {
      const defaultConstellation = "Andromeda";
      setSearchParams({ constellation: defaultConstellation });
    }
  }, [searchParams]);

  return (
    <GalaxyLayoutWrapper>
      <FormAndLinkWrapper isMenuOpen={state.isMenuOpen}>
        <Form>
          <select name="constellations" onChange={handleSubmit}>
            {constellations.map(item => (
              <Option key={item.label} value={item.label}>{item.label}</Option>
            ))}
          </select>
        </Form>
        <Nav>
          <ActiveNavLink
            to={`.?constellation=${searchParams.get("constellation")}`}
            end
            activeclassname="active"
          >
            Info/Map
          </ActiveNavLink>
          <ActiveNavLink
            to={`nasaPod?constellation=${searchParams.get("constellation")}`}
            activeclassname="active"
          >
            NASA POD
          </ActiveNavLink>
        </Nav>
      </FormAndLinkWrapper>
      <Outlet />
    </GalaxyLayoutWrapper>
  )
}


