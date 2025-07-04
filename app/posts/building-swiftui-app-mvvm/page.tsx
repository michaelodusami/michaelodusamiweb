import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building a SwiftUI App with MVVM Architecture | Michael Odusami',
  description: 'Learn how to implement the MVVM pattern in SwiftUI for better code organization and testability. This comprehensive guide covers everything from basic setup to advanced techniques.',
  keywords: ['SwiftUI', 'MVVM', 'iOS Development', 'Architecture', 'Swift'],
  authors: [{ name: 'Michael Odusami' }],
  openGraph: {
    title: 'Building a SwiftUI App with MVVM Architecture',
    description: 'Learn how to implement the MVVM pattern in SwiftUI for better code organization and testability.',
    type: 'article',
    publishedTime: '2024-12-15T00:00:00.000Z',
    authors: ['Michael Odusami'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Building a SwiftUI App with MVVM Architecture',
    description: 'Learn how to implement the MVVM pattern in SwiftUI for better code organization and testability.',
  },
  alternates: {
    canonical: 'https://medium.com/@michaelodusami/building-swiftui-app-mvvm',
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/posts"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Posts
        </Link>
      </section>

      {/* Article Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Building a SwiftUI App with MVVM Architecture
            </h1>
            <div className="flex items-center space-x-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>8 min read</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Originally published on</span>
              <a
                href="https://medium.com/@michaelodusami/building-swiftui-app-mvvm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                Medium
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Learn how to implement the MVVM pattern in SwiftUI for better code organization and testability. 
              This comprehensive guide covers everything from basic setup to advanced techniques.
            </p>

            <h2>Introduction</h2>
            <p>
              Model-View-ViewModel (MVVM) is a popular architectural pattern that has become the standard 
              for building iOS applications. When combined with SwiftUI, MVVM provides a clean separation 
              of concerns, making your code more maintainable, testable, and scalable.
            </p>

            <h2>What is MVVM?</h2>
            <p>
              MVVM consists of three main components:
            </p>
            <ul>
              <li><strong>Model:</strong> Represents your data and business logic</li>
              <li><strong>View:</strong> The UI layer that displays data and handles user interactions</li>
              <li><strong>ViewModel:</strong> The bridge between Model and View, containing presentation logic</li>
            </ul>

            <h2>Setting Up MVVM in SwiftUI</h2>
            <p>
              Let's start by creating a simple example. We'll build a task management app that demonstrates 
              the MVVM pattern in action.
            </p>

            <h3>1. The Model</h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`struct Task: Identifiable, Codable {
    let id = UUID()
    var title: String
    var isCompleted: Bool
    var priority: Priority
    
    enum Priority: String, CaseIterable, Codable {
        case low, medium, high
    }
}`}
            </pre>

            <h3>2. The ViewModel</h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`@MainActor
class TaskListViewModel: ObservableObject {
    @Published var tasks: [Task] = []
    @Published var isLoading = false
    @Published var errorMessage: String?
    
    func addTask(_ title: String, priority: Task.Priority) {
        let task = Task(title: title, isCompleted: false, priority: priority)
        tasks.append(task)
    }
    
    func toggleTask(_ task: Task) {
        if let index = tasks.firstIndex(where: { $0.id == task.id }) {
            tasks[index].isCompleted.toggle()
        }
    }
    
    func deleteTask(_ task: Task) {
        tasks.removeAll { $0.id == task.id }
    }
}`}
            </pre>

            <h3>3. The View</h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`struct TaskListView: View {
    @StateObject private var viewModel = TaskListViewModel()
    @State private var newTaskTitle = ""
    @State private var selectedPriority = Task.Priority.medium
    
    var body: some View {
        NavigationView {
            VStack {
                // Add task form
                HStack {
                    TextField("New task", text: $newTaskTitle)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    
                    Picker("Priority", selection: $selectedPriority) {
                        ForEach(Task.Priority.allCases, id: \\.self) { priority in
                            Text(priority.rawValue.capitalized)
                        }
                    }
                    .pickerStyle(MenuPickerStyle())
                    
                    Button("Add") {
                        viewModel.addTask(newTaskTitle, priority: selectedPriority)
                        newTaskTitle = ""
                    }
                    .disabled(newTaskTitle.isEmpty)
                }
                .padding()
                
                // Task list
                List {
                    ForEach(viewModel.tasks) { task in
                        TaskRowView(task: task, viewModel: viewModel)
                    }
                    .onDelete { indexSet in
                        for index in indexSet {
                            viewModel.deleteTask(viewModel.tasks[index])
                        }
                    }
                }
            }
            .navigationTitle("Tasks")
        }
    }
}`}
            </pre>

            <h2>Benefits of MVVM in SwiftUI</h2>
            <p>
              Using MVVM with SwiftUI provides several advantages:
            </p>
            <ul>
              <li><strong>Separation of Concerns:</strong> Each component has a specific responsibility</li>
              <li><strong>Testability:</strong> ViewModels can be easily unit tested</li>
              <li><strong>Reusability:</strong> ViewModels can be shared across multiple views</li>
              <li><strong>Maintainability:</strong> Changes to business logic don't affect the UI</li>
            </ul>

            <h2>Advanced MVVM Techniques</h2>
            <p>
              As your app grows, you'll want to implement more advanced patterns:
            </p>
            <ul>
              <li>Dependency injection for better testability</li>
              <li>Coordinator pattern for navigation</li>
              <li>Repository pattern for data access</li>
              <li>Combine integration for reactive programming</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              MVVM is an excellent choice for SwiftUI applications. It provides a clean, maintainable 
              architecture that scales well as your app grows. By following these patterns, you'll create 
              code that's easier to test, debug, and extend.
            </p>

            <p>
              Remember, the key to successful MVVM implementation is maintaining clear boundaries between 
              your Model, View, and ViewModel layers. Keep your ViewModels focused on presentation logic, 
              and let your Models handle business logic.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://developer.apple.com/documentation/swiftui" className="text-primary hover:underline">
                    SwiftUI Documentation
                  </a>
                </li>
                <li>
                  <a href="https://developer.apple.com/documentation/combine" className="text-primary hover:underline">
                    Combine Framework
                  </a>
                </li>
                <li>
                  <a href="https://github.com/michaelodusami/swiftui-mvvm-example" className="text-primary hover:underline">
                    Complete Example on GitHub
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
} 