/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kZRIBumpGp3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card key="1" className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-xl">Attendance Input</CardTitle>
        <CardDescription>Enter attendance information.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-row gap-4">
            <div>
              <Label htmlFor="class">Class</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Math</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="week">Week</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a week" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week1">Week 1</SelectItem>
                  <SelectItem value="week2">Week 2</SelectItem>
                  <SelectItem value="week3">Week 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <div>
              <Input className="border border-gray-300 dark:border-gray-700" id="name" placeholder="Name" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label>Attendance</Label>
            <Button size="sm" variant="outline">
              Present
            </Button>
            <Button size="sm" variant="outline">
              Absent
            </Button>
            <Button size="sm" variant="outline">
              Late
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="score">Score</Label>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a score" />
                </SelectTrigger>
                <SelectContent />
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="assignment">Assignment</Label>
            <div className="flex items-center w-full">
              <Button className="bg-green-500 text-white" size="sm" variant="outline">
                2
              </Button>
              <Button className="bg-yellow-500 text-white" size="sm" variant="outline">
                1
              </Button>
              <Button className="bg-red-500 text-white" size="sm" variant="outline">
                0
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button size="lg">Submit</Button>
      </CardFooter>
    </Card>
  )
}

