
import { Controller, Get, Post, Param, Delete, Body, Patch } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/student.dto';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    async getStudents() {
        return await this.studentService.getStudents();
    }

    @Post()
    async createStudent(@Body() dto: CreateStudentDto) {
        return await this.studentService.createStudent(dto);
    }

    @Patch(":id")
    async updateStudent(@Param("id") id: string, @Body() dto: CreateStudentDto) {
        return await this.studentService.updateStudent(id, dto);
    }

    @Delete(":id")
    async deleteStudent(@Param("id") id: string) {
        return await this.studentService.deleteStudent(id);
    }
}