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
    background-color: #000;
    font-size: 1rem;
    padding: 1em 0;
    margin-bottom: .5em;
    color: #fff;
    border: none;
  }

  & > *:last-child {
    padding: 1em 0;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: .5em;
  }
`

const Select = styled.select`
  font-size: 1rem;
`

const Option = styled.option`
  background: black;
  font-size: 1rem;
`

const Nav = styled.nav`
  display: flex;
  // background-color: #000;
`

const ActiveNavLink = styled(NavLink)`
  padding: 0;
  flex-grow: 1;
  flex-basis: 50%;
  text-align: center;
  font-weight: normal;
  font-size: .8rem;
  color: #f7f5fb;
  padding: .4em 0;
  margin: 0;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  background-color: rgba(0,0,0,0.7);

  &.active {
    border: 1px solid rgba(255,255,255,0.2);
    border-bottom: none;
    color: #f7f5fb;
    font-weight: bold;
    background-color: #000;
    // transition: font-size .1s ease-in-out;
    font-size: .9rem;
  }
`

export default function ConstellationLayout() {
  console.log('constellation length '+ constellations.length)
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
          <Select name="constellations" onChange={handleSubmit}>
            {constellations.map(item => (
              <Option key={item.label} value={item.label}>{item.label}</Option>
            ))}
          </Select>
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


