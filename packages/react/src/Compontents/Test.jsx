import { useActor, useMachine } from "@xstate/react";
import React, { useState, useEffect } from "react";
import { Machine, assign, State, spawn } from "xstate";
const m = Machine({
  initial: "idle",
  context: {
    randomNumber: null
  },
  states: {
    idle: {
      on: {
        TOGGLE: {
          target: "active",
          actions: assign({ randomNumber: () => Math.random() })
        },
        SPAWN: {
          target: "active",
          actions: assign({ test: () => spawn(t) })
        }
      }
    },
    active: {
      on: {
        TOGGLE: "idle"
      }
    }
  }
});

const t = Machine({
  initial: "idle",
  context: {
    randomNumber: null
  },
  states: {
    idle: {
      on: {
        TOGGLE: {
          target: "active",
          actions: assign({ randomNumber: () => Math.random() })
        }
      }
    },
    active: {
      on: {
        TOGGLE: "idle"
      }
    }
  }
});

const Test = () => {
  const [restoredState] = useState(JSON.parse(localStorage.getItem("abc")));

  return <TestState restoredState={restoredState} />;
};

export default Test;

const TestState = ({ restoredState }) => {
  console.log(restoredState);
  const [state, send] = useMachine(m, {
    state: restoredState ? State.create(restoredState) : undefined
  });

  useEffect(() => {
    localStorage.setItem("abc", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <h1 style={{ display: "block" }}>{state.value}</h1>
      <h2 style={{ display: "block" }}>
        random number: {state.context.randomNumber}
      </h2>
      <button style={{ display: "block" }} onClick={() => send("TOGGLE")}>
        CLICK
      </button>
      <button style={{ display: "block" }} onClick={() => send("SPAWN")}>
        Spawn
      </button>
      {console.log(state.context.test, "testMachine")}
      {state.context.test && state.context.test.machine && (
        <TestSub test={state.context.test} />
      )}
    </div>
  );
};

const TestSub = ({ test }) => {
  const [state, send] = useActor(test);
 
    return (
      <>
        <hr />
        <h1 style={{ display: "block" }}>Test: {state.value}</h1>
        <h2 style={{ display: "block" }}>
          random number: {state.context.randomNumber}
        </h2>
        <button style={{ display: "block" }} onClick={() => send("TOGGLE")}>
          CLICK
        </button>
      </>
    );

};

