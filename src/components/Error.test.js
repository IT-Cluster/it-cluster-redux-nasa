import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

describe("Error message", () => {
    it("Should render error with default text", () => {
        const { container } = render(
            <Error />
        );
        const div = container.querySelector("div");
        expect(div).toHaveTextContent('Невідома помилка');
    });

    it("Should render error with error message", () => {
        const { container } = render(
            <Error message="Error message"/>
        );
        const div = container.querySelector("div");
        expect(div).toHaveTextContent('Error message');
    });

    it("Should render error with attribute role=\"alert\"", () => {
        const { container } = render(
            <Error />
        );
        const div = container.querySelector("div");
        expect(div).toHaveAttribute('role', 'alert');
    });

    it("Should render error with correct class", () => {
        const { container } = render(
            <Error />
        );
        const div = container.querySelector("div");
        expect(div).toHaveClass('alert');
    });

});
