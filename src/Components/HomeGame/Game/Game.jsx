import React from "react";
import Matter from "matter-js";
import glasses from "../../../assets/Glasses_perspective_matte 1.png"
import './game.css';


function Game() {
    const boxRef = React.useRef(null);
    const canvasRef = React.useRef(null);


    React.useEffect(()=>{
        let Engine = Matter.Engine;
        let World = Matter.World;
        let Render = Matter.Render;
        let Bodies = Matter.Bodies;
        let Composite = Matter.Composite;
        let Runner = Matter.Runner;
        let MouseConstraint = Matter.MouseConstraint;
        let Mouse = Matter.Mouse;

        let engine = Engine.create({});
        let world = engine.world;

        let runner = Runner.create();
        Runner.run(runner, engine);
        // engine.world.gravity.scale = 1;

        let render = Render.create({
            element: boxRef.current,
            engine: engine,
            canvas: canvasRef.current,
            options: {
                wireframes: false
            }
        })

        Composite.add(world, [
            Bodies.rectangle(100, 100, 30, 10, {
                frictionAir: 0.8,
                render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: glasses
                    }
                }
            }),
            Bodies.rectangle(150, 300, 300, 20, {
                isStatic: true,
                render: {
                    fillStyle: 'blue',
                },
            })
        ])

        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 }
        });

        let mouse = Mouse.create(render.canvas)
        let mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        World.add(world, mouseConstraint);

        render.mouse = mouse;


        Engine.run(engine);
        Render.run(render);

    },[])

    return(
        <div
            ref={boxRef}
            className='game--scene'
        >
            <canvas ref={canvasRef}  />
        </div>
    )
}

export default Game;