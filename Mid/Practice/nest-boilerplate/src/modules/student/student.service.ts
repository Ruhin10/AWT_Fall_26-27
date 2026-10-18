import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto ,UpdateStudentDto } from './dto/student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) 
        private readonly studentRepository: Repository<Student>,
    ) {}

    async getStudents() {
        try {
            const students = await this.studentRepository.find();
            return students;
        } catch (error) {
            throw error;
        }
    }

    async createStudent(dto : CreateStudentDto) {
        try {
            const response = await this.studentRepository.create(dto);
            return await this.studentRepository.save(response);
        } catch (error) {
            throw error;
        }
    }

    async updateStudent(id: string, dto: UpdateStudentDto) {
        try {
            console.log("id", id);
            if (!id) {
                throw new NotFoundException("Student with ID not found");
            }
            const student = await this.studentRepository.findOne({ where: { id: id } });
            if (!student) {
                throw new NotFoundException("Student with ID not found");
            }
            Object.assign(student, dto);
            const { id: uid, ...rest } = student;
            return await this.studentRepository.update({ id: id }, rest);
        } catch (error) {
            throw error;
        }
    }

    async deleteStudent(id: string) {
        try {
            const student = await this.studentRepository.findOne({ where: { id: id } });
            if (!student) {
                throw new NotFoundException("Student with ID not found");
            }
            return await this.studentRepository.delete({ id: id });
        } catch (error) {
            throw error;
        }
    }
}