
"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Recipe } from "@/lib/types";



async function fetchRecipes(prompt: string): Promise<Recipe[]> {
  
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}

export default function Chat() {


  const [prompt, setPrompt] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit() {
    if (!prompt.trim()) return; // Prevent empty submissions
    setIsLoading(true);
    try {
      const response = await fetchRecipes(prompt);
      setRecipes(response);
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to generate recipes. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center bggradient-to-br fromblue-50 toblue-100 p-6 bg-[#def1d5] dark:bg-[#121212]">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Recipe Inspiration Hub 🍲</h1>

      <div className="flex flex-col w-full max-w-xl items-center">
        <div className="flex items-center gap-2 w-full mb-4">
          <Input
            className="flex-1 p-4 rounded-md shadow-sm"
            type="text"
            placeholder="Enter themes or ingredients..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
            onClick={onSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Ideas!"}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 w-full">
          {recipes.length > 0 &&
            recipes.map((recipe, i) => (
              <Card
                key={i}
                className="flex flex-col flex-1 p-4 shadow-md border border-gray-200 rounded-lg bg-white hover:shadow-lg transition"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">{recipe.name}</CardTitle>
                  <CardDescription className="text-gray-600">{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Ingredients</h3>
                    <ul className="text-sm list-disc ml-4 p-2 bg-gray-100 rounded-md shadow-sm">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Instructions</h3>
                    <ol className="text-sm list-decimal ml-4 p-2 bg-gray-100 rounded-md shadow-sm">
                      {recipe.instructions.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white mt-4 px-4 py-2 rounded-md shadow transition"
                    onClick={() => alert("Recipe saved!")}
                  >
                    Save Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </main>
  );
}
